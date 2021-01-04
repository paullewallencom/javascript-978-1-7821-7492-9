var express = require('express');

// custom modules
var user = require('./custom_modules/user');
var TicketDetail = require('./custom_modules/ticket');

var http = require('http');
var cons = require('consolidate'), name = 'swig';
var path = require('path');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose/');
var methodOverride = require('method-override');
var mongodb = require('mongodb');

//We need to use "MongoClient" interface in order to get connected to a mongodb server.
var MongoClient = mongodb.MongoClient;
mongoose.connect('mongodb://localhost:27017/nodedb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  // yay!
});

/* ***********************
 * Initialize Middleware *
 * **********************/

// Instantiate the express object
var app = express();

// Use the static assets from the same directory as this server.js file
app.use(express.static(path.resolve("./app")));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride());
app.use(express.session({
    secret: 'node1234567890NODY',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static(__dirname + '/public'));
app.use(app.router);
process.env.NODE_ENV = "development";
// passport config

if ( app.get('env') === 'development' ) {
    app.use(express.errorHandler());
}
// check if user is trying to access dashboard directly without being authenticated.
function requireLogin (req, res, next) {
  if (!req.user) {
    res.redirect('login');
  } else {
    next();
  }
};

// passport config for login

passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    user.findOne({
      'username': username, 
    }, function(err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done(null, false);
      }

      if (user.password != password) {
        return done(null, false);
      }

      return done(null, user);
    });
  });
}));
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// assign the swig engine to .html files
app.engine('html', cons.swig);

// set .html as the default extension
app.set('view engine', 'html');
app.set('views', __dirname + '/app');

// login logic starts.
app.get('/', function (req, res, next) {
    res.render('login');
});
app.get('/login', function (req, res, next) {
    res.render('login');
});


app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/loginFailure'
  })
);

app.get('/loginFailure', function(req, res, next) {
  res.render('login', {msg:'Authentication Failed.Please enter valid username and password',show:'alert alert-danger'});
});
// login logic ends

app.post('/addticket', function(req, res) {
	
	now = new Date();
	dateNow = now;
	
	var addticket = new TicketDetail({user: req.user.name,email: req.user.email, issuetype : req.body.type, department: req.body.department, ticketstate: 'open',comments:req.body.comments, createddate:now});
	
	addticket.save(function(err){ 
        if(err) {
			throw err;
			 } 
			 else
			 {
				res.render('addticket',{msg:'Your Ticket Submitted Successfully', show:'alert alert-info', visibility:'hidden'});
			 }
    });
});

app.get('/addnewticket', function(req, res, next) {
		res.render('addticket',{ title:'Add new ticket', username : req.user.name, email:req.user.email, visibility:'show' });
});

app.get('/dashboard',requireLogin, function(req, res) {

	TicketDetail.find({email: req.user.email }, function(err, obj) {
	  if (err){ throw err;}
		else
	  {
		var tickets = Object.keys(obj).map(function(k) { return obj[k] });
		res.render('dashboard',{title: 'HelpDesk Ticket Tracking Tool',username:req.user.name,email:req.user.email,tickets:tickets});
		res.status(200);
		console.log(tickets);
	  }
	});
});
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

app.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

/* ******************
 * Start the server *
 * ******************/

var port = process.env.PORT || 8000;

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
});
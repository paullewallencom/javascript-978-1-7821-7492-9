var assert = require("chai").assert;
var http   = require("http");
var userlogin = require('../custom_modules/user');
var TicketDetails = require('../custom_modules/ticket');
var app = require('../app');
var mongoose = require('mongoose');
var should   = require("should");
var db;

var server = require("../custom_modules/server.js");
var url = "http://localhost:8000";

describe('Server Running Status', function() {
	it("should return a 200 response", function (done) {
		//var app = server();
		http.get("http://localhost:8000", function (res) {
			assert.equal(res.statusCode, 200);
			done();
		});
	});
});

describe('Testing Login Module', function() {
	before(function(done) {
		db = mongoose.createConnection('mongodb://localhost:27017/nodedb'); // using the default port.
		done();
	});
	after(function(done) {
		mongoose.connection.close();
		done();
	});
	beforeEach(function(done) {
		var user = new userlogin({
			username: 'test090',
			password: 'testy'
		});

		user.save(function(err) {
			if (err) console.log('error' + err);
			else console.log('no error in saving a new user');
			done();
		});
	});
	afterEach(function(done) {
		userlogin.remove({username: 'test090'}, function(err) {
			if (err)
				console.log('error' + err);
			else 
				console.log('user remove from the database successfully');			
			done();
		});
	});
	it("should return the correct page LOGIN", function (done) {
	
		http.get(url, function (response) {

			var htmlData = "";
			response.on("data", function (data) {
				htmlData = data;
			}).on("end", function () {
				assert.isTrue(htmlData.indexOf("<title>Login</title>") != -1);
				done();
			});
		});
	});
	
	it('find a user by username', function(done) {
		userlogin.findOne({ username: 'test090' }, function(err, user) {
		  user.username.should.eql('test090');
		  console.log("username: ", user.username)
		  done();
		});
	 });
});

describe('Required Login to access the Dashboard URL', function() {	 
		it("You cannot access the page without login", function (done) {

			http.get('http://localhost:8000/dashboard', function (res) {
				assert.equal(res.statusCode, 302);
				done();
			});
		});
});

describe('Testing User Logout', function() {	 
	it("should return a login page when we logout", function (done) {
		http.get(url+'/logout', function (res) {
			expect(url).to.eql(url)
			done();
		});
	});
});


describe('Testing ticket module.', function() {	 
	before(function(done) {
		db = mongoose.createConnection('mongodb://localhost:27017/nodedb');
		done();
	});
	after(function(done) {
		mongoose.connection.close();
		done();
	});
	beforeEach(function(done) {
		var ticket = new TicketDetails({
			user: 'test090',
			email: 'test@testdomain.com',
			issuetype : 'Access Related Issue',
			department : 'IT',
			ticketstate : 'Open',
			comments : 'not able to access the shared database URL',
			createddate : Date('2015-8-15')
		});
		ticket.save('Adding a Ticket', function(error) {
			if (error) console.log('error' + error.message);
			else console.log('no error in saving a new ticket');
	   });
		done();
　　	});
	afterEach(function(done) {
		TicketDetails.remove({user: 'test090'}, function(error) {
			if (error) console.log('error' + error.message);
			else console.log('ticket removed from the database successfully');	
			
		});
		done();
	});
	it('find a tickets of that user by email', function(done) {
		TicketDetails.find({ email: 'test@testdomain.com' }, function(err, TicketDetails) {
			TicketDetails.email.should.eql('test@testdomain.com');
			console.log("User Email id: ", TicketDetails.email)
			
		});
		done();
	});
});


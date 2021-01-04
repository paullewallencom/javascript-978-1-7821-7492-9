var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addTicketSchema = new Schema({
	user: String,
	email: String,
	issuetype : String,
	department : String,
	ticketstate : String,
	comments : String,
	createddate : Date
}, {
      collection: 'tickets'
    });

var TicketDetail = mongoose.model('tickets', addTicketSchema);

module.exports = TicketDetail;


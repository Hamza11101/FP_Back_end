
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    clientFirstName: String,
    clientLastName: String,
    clientEmail: String,
    qrCodePath: String,
    ticketPath: String,     
    event:{type:Schema.Types.ObjectId,ref:'event'}
},{
    timestamps: true,
    versionKey: false
});

const Reservation = mongoose.model('reservation',reservationSchema);
module.exports = Reservation;
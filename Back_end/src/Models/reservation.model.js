
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    owner:{type:Schema.Types.ObjectId},
    event:{type:Schema.Types.ObjectId,ref:'event'},
    qrCodePath: String,
    ticketPath: String     
},{
    timestamps: true,
    versionKey: false
});

const Reservation = mongoose.model('event',reservationSchema);
module.exports = Reservation;
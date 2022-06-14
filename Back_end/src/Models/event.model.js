
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    
        eventName:String,
        eventDescription:String,
        startDate:String,
        endDate:String,
        startTime:String,
        endTime:String,
        price:String,
        location:String,
        tags:[{type:Schema.Types.ObjectId,ref:'tag'}],
        owner:{type:Schema.Types.ObjectId},
        picture:String,
        availebleTicketNumber:Number,
        
      
},{
    timestamps: true,
    versionKey: false
});

const Event = mongoose.model('event',eventSchema);
module.exports = Event;
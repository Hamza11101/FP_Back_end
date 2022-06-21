const Event = require('../Models/event.model')
const Tag = require('../Models/tag.model');
exports.getAllEvents = async (req, res, next) => {
    try {
        let event = await Event.find()
        res.send(event);
    } catch (error) {
        next();
    }
};

exports.getOneEvent = async (req, res, next) => {
    try {
        let event = await Event.findById(req.params.id).populate('tags')
        res.send(event);

    } catch (error) {
        next();
    }
};

exports.addOneEvent = async (req, res, next) => {

    try {
        // save file
        if(req.file != undefined)
        {
            req.body.picture = `http://localhost:5000/uploads/${req.file.filename}`
        }else{
            req.body.picture =  `http://localhost:5000/uploads/noimg.jpg` 
        }
        // parse tags
        req.body.tags = JSON.parse(req.body.tags);
        const event = new Event({
            eventName: req.body.eventName,
            eventDescription: req.body.eventDescription,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            startTime:req.body.startTime,
            endTime:req.body.endTime,
            price:req.body.price,
            location:req.body.location,
            picture:req.body.picture,
            availebleTicketNumber:req.body.availebleTicketNumber,
            tags: req.body.tags,
            owner:req.user._id,

        
        })
        await event.save()

        
        res.send({message: "Event created successfully."})

    } catch (error) {
        console.log(error);
        next();

    }

};

exports.getTags =  async (req, res, next) => {
    try {
        const tags = await Tag.find()
        let newTagsForm = []
        tags.map(tag => {
            newTagsForm.push({label:tag.name, value:tag._id})
        })
        res.send(newTagsForm)
    }
    catch (error) {
        next();
    }
};
exports.updateOneEvent = async (req, res, next) => {
    try {
        // save file
        if(req.file != undefined)
        {
            req.body.picture = `http://localhost:5000/uploads/${req.file.filename}`
        }else{
            req.body.picture =  `http://localhost:5000/uploads/noimg.jpg` 
        }
        // parse tags
        req.body.tags = JSON.parse(req.body.tags);
        let event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send({message: "Event has been updated successfully."})
    }
    catch (error) {
        next();
    }
};

exports.deleteOneEvent = async (req, res, next) => {
    try {
        let event = await Event.findByIdAndRemove(req.params.id);
        res.send({message: "Event has been delated successfully."});
    } catch (error) {
        next()
    }
};
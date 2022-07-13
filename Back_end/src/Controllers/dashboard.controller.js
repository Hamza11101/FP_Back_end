const Tags = require('../Models/tag.model');
const Users = require('../Models/User.model');
const Events = require('../Models/event.model');
const Reservation = require('../Models/reservation.model');

exports.getAllStat = async (req, res, next) => {
    try {
        let userCount = await Users.countDocuments()
        let resevationCount = await Reservation.countDocuments()
        let tagsCount = await Tags.countDocuments()
        let eventsCount = await Events.countDocuments()

        res.send({
            users: userCount,
            reservation: resevationCount,
            tags: tagsCount,
            events: eventsCount
        });
    } catch (error) {
        next();
    }
};



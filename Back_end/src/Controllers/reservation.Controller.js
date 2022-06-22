const Reservation = require('../Models/reservation.model');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

exports.createReservation = async (req, res, next) => {
    try {
        // if the (availble ticket number is > 0)
        const reservation = new Reservation({
            clientFirstName: req.body.clientFirstName,
            clientLastName: req.body.clientLastName,
            clientEmail: req.body.clientEmail,
            qrCodePath: '',
            ticketPath: '',
            event: req.body.eventId
        })
        // qr code 
        // generation of ticket pdf
        // send mail
        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user: process.env.userEmail,
                pass: process.env.userPassword,
            },
        });
        const templatePath = path.resolve('./src/utils', 'reservation.html');
        const reservationTemplate = fs.readFileSync(templatePath, { encoding: 'utf-8' })
        const render = ejs.render(reservationTemplate, { First_name: reservation.clientFirstName, Last_name: reservation.clientLastName })
        const info = await transporter.sendMail({
            from: process.env.userEmail, // sender address
            to: `${reservation.clientEmail}`,
            subject: "Event reservation",
            html: render
        });

        // decrement the number of availale ticket number 
        await reservation.save()
        res.send({ message: "Reservation booked successfully." })
    } catch (error) {
        console.log(error);
        next();
    }
};
const Reservation = require('../Models/reservation.model');
const Event = require('../Models/event.model')
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const QRCode = require('qrcode');
const pdf = require("pdf-creator-node");
const ticketPath = path.resolve('./src/utils', 'ticket.html');
const Ticket = fs.readFileSync(ticketPath, { encoding: 'utf-8' })
const { v4: uuid } = require('uuid'); 


exports.createReservation = async (req, res, next) => {
    try {
        var event = await Event.findById(req.body.eventId)
        if (event.availebleTicketNumber > 0) {
            let qrCodeFileName = uuid();
            var ticketFileName = uuid();
            const reservation = new Reservation({
                clientFirstName: req.body.clientFirstName,
                clientLastName: req.body.clientLastName,
                clientEmail: req.body.clientEmail,
                qrCodePath: `http://localhost:5000/generatedFiles/qrCodes/${qrCodeFileName}.png`,
                ticketPath: `http://localhost:5000/generatedFiles/tickets/${ticketFileName}.pdf`,
                event: req.body.eventId
            })
            console.log(reservation);
            // qr code generation
             QRCode.toFile(`./generatedFiles/qrCodes/${qrCodeFileName}.png`, JSON.stringify(reservation), ['.png'])
            // generation of ticket pdf
            var options = {
                format: "A3",
                orientation: "portrait",
                border: "10mm",
                header: {
                    height: "45mm",
                    contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
                },
                footer: {
                    height: "28mm",
                    contents: {
                        first: 'Cover page',
                        2: 'Second page', // Any page number is working. 1-based index
                        default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                        last: 'Last Page'
                    }
                }
            };
            var document = {
                html: Ticket,
                data: {
                    Reservation: Reservation,
                },
                path:  `./generatedFiles/tickets/${ticketFileName}.pdf`,
                type: "",
            };

            pdf.create(document, options)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.error(error);
                });
            // send mail
            const transporter = nodemailer.createTransport({
                service: 'yahoo',
                auth: {
                    user: process.env.userEmail,
                    pass: process.env.userPassword,
                },
            });
            //send an email
            const templatePath = path.resolve('./src/utils', 'reservation.html');
            const reservationTemplate = fs.readFileSync(templatePath, { encoding: 'utf-8' })
            const render = ejs.render(reservationTemplate, { First_name: reservation.clientFirstName, Last_name: reservation.clientLastName })
            const info = await transporter.sendMail({
                from: process.env.userEmail, // sender address
                to: `${reservation.clientEmail}`,
                subject: "Event reservation",
                attachments: [{
                    filename: 'ticket.pdf',
                    path: `./generatedFiles/tickets/${ticketFileName}.pdf`
                }]
            });

            // decrement the number of availale ticket number
            await Event.findByIdAndUpdate(req.params.id, { "$inc": { availebleTicketNumber: -1 } }, { new: true })

            await reservation.save()
            res.send({ message: "Reservation booked successfully." })
        }
        else {
            res.status(400).json({ message: 'no ticket avialable' })
        }
    } catch (error) {
        console.log(error);
        next();
    }
};
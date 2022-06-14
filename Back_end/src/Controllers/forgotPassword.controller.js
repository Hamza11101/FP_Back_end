const User = require('../Models/User.model');
const Token = require('../Models/token.model');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const randomString = require('randomstring')

exports.forgotPassword =  async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        res.status(400).json({ message: "User does not exist" });
    }
    else{

        const token = await Token.findOne({ userId: user._id });
        if (token) {
            await token.deleteOne()
        };
       
        const resetToken = randomString.generate(30)
        const createdToken = await new Token({
            userId: user._id,
            token: resetToken,
        }).save();
        //send mail
        const transporter = nodemailer.createTransport({
            service: 'yahoo',
            auth: {
                user:process.env.userEmail ,
                pass:process.env.userPassword,
            },
        });
        const templatePath = path.resolve('./src/utils','resetPassword.html');
        const registerTemplate = fs.readFileSync(templatePath, {encoding:'utf-8'})
        const render= ejs.render(registerTemplate,{name:user.userName,link:`${process.env.FRONT_URL}reset-password/${createdToken.token}`})
         const info = await transporter.sendMail({
            from: process.env.userEmail, // sender address
            to: `${user.email}`,
            subject: "Password reset", 
            html: render
        });
    
        res.json({ message: 'Check your mailbox' })
    }
}
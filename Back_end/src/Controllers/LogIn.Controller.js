const User = require('../models/User.model')
const bcrypt = require("bcryptjs");




exports.LogIn = async (req, res, next) => {
    try {
        let user = await User.findOne({ Email: req.body.Email })
       
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(req.body.Password, user.Password);
            if (validPassword) {
               res.status(200).json({ message: "Valid password" });
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
        }
    }

    catch (error) {
        next();
    }
}

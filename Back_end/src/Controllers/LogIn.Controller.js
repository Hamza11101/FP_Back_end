const User = require('../Models/User.model')
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');



exports.logIn = async (req, res, next) => {
    try {
        let user = await User.findOne({ email: req.body.email })
       
        if (user) {
            // check user password with hashed password stored in the database
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (validPassword) {
                // Create token
                const token = jwt.sign(
                    { user_id:  user._id },
                    process.env.TOKEN_KEY,
                    {
                        expiresIn: "1d",
                    }
                );                
               res.status(200).json({ message: "Valid password" , token: token});
            } else {
                res.status(400).json({ error: "Invalid Password" });
            }
        } else {
            res.status(401).json({ error: "User does not exist" });
       
     }
    }

    catch (error) {
        console.log(error);
        next();
    }
}

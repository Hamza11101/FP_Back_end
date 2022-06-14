const User = require('../Models/User.model');
const bcrypt = require("bcryptjs");



exports.register = async (req, res, next) => {

    try {

        const userFound = await User.find({email: req.body.email});
        if(userFound.length>0){
            res.status(400).send({message: 'email already in use.'})
        }
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            role:req.body.role,
        })
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        // console.log(register.passeword);
        user.save();
        // const user = await user.create(req.body)
        //   res.send({message : "You account has been created successfully."});
        res.send(user);


    } catch (error) {
        next();

    }
};


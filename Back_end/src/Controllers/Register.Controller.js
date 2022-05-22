const User = require('../models/User.model')
const bcrypt = require("bcryptjs");



exports.Register = async (req, res, next) => {
    try {
        const user = new User({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Password: req.body.Password,
            Email: req.body.Email,
            Role:req.body.Role,
        })
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.Password = await bcrypt.hash(user.Password, salt);
        // console.log(register.passeword);
        user.save();
        // const user = await user.create(req.body)
        //   res.send({message : "You account has been created successfully."});
        res.send(user);


    } catch (error) {
        next();

    }
};


exports.getAllUsers = async (req, res, next) => {
    try {
        console.log(req.user);
        let user = await User.find()
        res.send(user);
    } catch (error) {
        next();
    }
}

exports.getOneUser = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id)
        res.send(user);

    } catch (error) {
        next();
    }
}
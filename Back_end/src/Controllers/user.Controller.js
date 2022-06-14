const User = require('../Models/User.model')

exports.getAllUsers = async (req, res, next) => {
    try {
        // console.log(req.user);
        let user = await User.find()
        res.send(user);
    } catch (error) {
        next();
    }
};

exports.getOneUser = async (req, res, next) => {
    try {
        let user = await User.findById(req.params.id)
        res.send(user);

    } catch (error) {
        next();
    }
};

exports.addOneUser = async (req, res, next) => {

    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role,
        
        })
        await user.save()

        // const user = await user.create(req.body)
        res.send(user)

    } catch (error) {
        next();

    }

};

exports.updateOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(user)
    }
    catch (error) {
        next();
    }
};

exports.deleteOneUser = async (req, res, next) => {
    try {
        let user = await User.findByIdAndRemove(req.params.id);
        res.send(user);
    } catch (error) {
        next()
    }
};


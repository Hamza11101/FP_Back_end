const Tags = require('../Models/tag.model')

exports.getAllTags = async (req, res, next) => {
    try {
        
        let tag = await Tags.find()
        res.send(tag);
    } catch (error) {
        next();
    }
};

exports.getOneTag = async (req, res, next) => {
    try {
        let tag = await Tags.findById(req.params.id)
        res.send(tag);

    } catch (error) {
        next();
    }
};

exports.addOneTag = async (req, res, next) => {

    try {
        const tag = new Tags({
            name: req.body.name,
            description: req.body.description,
            
        
        })
        await tag.save()

        res.send(tag)

    } catch (error) {
        next();

    }

};

exports.updateOneTag = async (req, res, next) => {
    try {
        let tag = await Tags.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(tag)
    }
    catch (error) {
        next();
    }
};

exports.deleteOneTag = async (req, res, next) => {
    try {
        let tag = await Tags.findByIdAndRemove(req.params.id);
        res.send(tag);
    } catch (error) {
        next()
    }
};


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TagsSchema = new Schema({
   name:{type:String,
    },
    description:{type:String,
       },
      
},{
    timestamps: true,
    versionKey: false
});

const Tags = mongoose.model('tag',TagsSchema);
module.exports = Tags;
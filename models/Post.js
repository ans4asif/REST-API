const mongoose=require('mongoose')

const PostSchema=mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()  
    }
});
module.exports = mongoose.model('Post',PostSchema)
//exports.module=mongoose.model(name of model we want to give,name of schema)

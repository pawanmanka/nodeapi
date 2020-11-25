const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name'],
        unique:true,
        trim:true,
        maxlength:[50,'Name can not be more than 50 characters ']
    },
    slug:{
        type:String,
        unique:true
    },
    desc:{
        type:String,
        required:true
    }
    
}); 
module.exports = mongoose.model('HomeModel',HomeSchema);
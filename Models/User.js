const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    device_registered:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

module.exports = mongoose.model('Users',userSchema)
const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    id: String,
    title: String,
    description: String,
    image: String,
    sent_by:String,
    sent_to:String
},{
    timeStamps:true
})

module.exports = mongoose.model("Notifications",notificationSchema)
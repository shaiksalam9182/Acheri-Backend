const randomString = require('randomstring')
const notification = require('../Models/notification')
exports.notification = (req,res) => {
    saveTheNotification(req,res);
}

function saveTheNotification(req,res){
    var id = randomString.generate(10)
    var not = new notification({
        id: id,
        title: "Test",
        description: "Testing descriptions",
        image: "/hello.png",
        sent_by:"admin",
        sent_to:"all"
    })
    not.save().then(result=>{
        res.send(result)
    }).catch(err=>{
        console.log(err)
    })
}

const { nameRequired, emailRequired, passwordRequired, deviceRequired } = require('../Static/strings')

exports.register = (req,res) =>{
    const User = require('../Models/User')
    const randomString = require('randomstring')
    const utilityStrings = require('../Static/strings')

    if(!req.body.name){
        sendFailedResponse(nameRequired)
    }else if(!req.body.email){
        sendFailedResponse(emailRequired)
    }else if(!req.body.password){
        sendFailedResponse(passwordRequired)
    }else if(!req.body.device_registered){
        sendFailedResponse(deviceRequired)
    }else{
        checkforPreviousEntry()
    }


    function checkforPreviousEntry(){
        User.findOne({email:req.body.email}).then(result=>{
            if(!result){
                registerUser(req.body)
            }else{
                sendFailedResponse(utilityStrings.userAlready)
            }
        }).catch(error=>{
            sendFailedResponse(error.message)
        })
    }

    function sendFailedResponse(message){
        res.send({
            success:false,
            error_msg:message
        })
    }

    function registerUser(data){
        var userId = randomString.generate(6)
        var userdata = new User({
            user_id:userId,
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            device_registered: req.body.device_registered
        })
        userdata.save().then(result=>{
            res.send({
                success:true,
                message: utilityStrings.userRegistered
            })
        }).catch(err=>{
            sendFailedResponse(err.message)
        })
    }
}
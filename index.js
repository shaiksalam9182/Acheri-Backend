const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/config')

mongoose.Promise = global.Promise

mongoose.connect(config.dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Connected to database')
}).catch((err)=>{
    throw err
})

var app = express()

require('./Routes/routes')(app)

app.listen(8080,()=>{
    console.log("Server is running in port 8080")
})
const express = require('express')
const bodyParser = require('body-parser')

var app = express()

require('./Routes/routes')(app)

app.listen(8080,()=>{
    console.log("Server is running in port 8080")
})
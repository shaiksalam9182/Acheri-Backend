module.exports = (app) =>{
    const bodyParser = require('body-parser')
    const cors = require('cors')
    const homepage = require('../Controllers/homepage')
    const register = require('../Controllers/register')

    app.use(bodyParser.urlencoded({
        extended: true
    }))
    app.use(bodyParser.json())
    app.use(cors())

   

    app.get('/',homepage.homepage)
    app.post('/register',register.register)


}
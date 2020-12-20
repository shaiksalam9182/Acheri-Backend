module.exports = (app) =>{
    const bodyParser = require('body-parser')
    const cors = require('cors')

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json())
    app.use(cors())

    const homepage = require('../Controllers/homepage')

    app.get('/',homepage.homepage)


}
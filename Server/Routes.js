const Express = require('express')
const Routes = Express.Router()


Routes.use('/',Express.static('build'));

module.exports = Routes



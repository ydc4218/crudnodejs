const Express = require('express')
const Mysql = require('mysql')
const Conection = require('express-myconnection')
const Routes = require('./Routes')

const app = Express()


const Options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'apijson'
}

app.use('/',Routes);


app.use(Conection(Mysql, Options, 'single'))


var port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Online' + port)
})
const Express = require('express')
const Mysql = require('mysql2')
const Conection = require('express-myconnection')
const Routes = require('./Routes')

const app = Express()


const Options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'crudnodejs'
}
app.use(Conection(Mysql, Options, 'single'))

app.use('/',Routes);


var port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Online' + port)
})
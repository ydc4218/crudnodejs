const Express = require('express')
const Mysql = require('mysql2')
const Conection = require('express-myconnection')

const bodyParser = require('body-parser')

const app = Express()


const Options = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Hmcl@2022',
    database: 'crudnodejs'
}

app.use(Express.static('./build'))


app.use(bodyParser.json())

app.use(Conection(Mysql, Options, 'single'))

app.route('/')
.get(function(req,res) {

    console.log(req.body)
    
    
})
.post(function(req,res) {
    console.log(req.url)
      
    
})

app.route('/post')
.get(function(req,res) {

    console.log(req.body)
    
    
})
.post(function(req,res) {
    console.log(req.body)
      
    
})


var port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Online' + port)
})
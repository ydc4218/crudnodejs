const Express = require('express')
const Mysql = require('mysql2')
const app =  Express()

const db = Mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password:'Hmcl@2022',
    database: 'crudnodejs'
})

app.use(Express.static('./build'))
    


app.post('/create', (req,res) =>{
    const Data = req.body


    db.query('INSERT INTO apijson (title, body, userId) VALUES (?,?,?)', [Data], 
    
(err, result) => {
    if(err){
        console.log(err)
    } else {
        res.send('Values Inserted')
    }
})
})


var port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log('Online' + port)
})
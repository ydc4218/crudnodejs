const Express = require('express');
const Routes = Express.Router()
const bodyParser = require('body-parser')












/*Routes.use('/', function(req, res, next){
    if ('POST' == req.method){
            console.log(req.body)
        
        next()
    }else{
        req.method = 'GET'
        next()
    }
    })
    Routes.use('/', Express.static('./build'))
 
*/


  





Routes.get('/', (req,res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM apijson', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})



module.exports = Routes



const Express = require('express');
const Routes = Express.Router()

Routes.use('/',Express.static('build'));
Routes.post('/post', (req,res) => {
  console.log(req.statusCode)
  
});

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



const Express = require('express');
const Routes = Express.Router()
const app = Express()



app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

app.get('/hello', (req, res) => {
  res.send('Hola mundo');
});

app.get('/urlparam', (req, res) => {
  res.send(req.query);
});

app.post('/urljson', (req, res) => {
  res.send(req.body);
});





Routes.use('/',Express.static('build'));






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



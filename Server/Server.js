const Express = require('express');
const Mysql = require('mysql2');
const app = Express();
const cors = require('cors');

app.use(cors());
app.use(Express.json());

const db = Mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '1234',
  database: 'crudnodejs',
});

app.post('/create', (req, res) => {
  const Data = req.body.DataRegister;

  db.query(
    'INSERT INTO apijson (userId,title,body) VALUES (?,?,?)',
    [Data.userId, Data.title, Data.body],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.post('/addapi', (req, res) => {
  const DataApi = req.body.ResponseJson;

  for (var i = 0; i < DataApi.length; i++) {
    var t1 = DataApi[i].userId;
    var t2 = DataApi[i].title;
    var t3 = DataApi[i].body;
    db.query(
      'INSERT INTO apijson (userId,title,body) VALUES(?,?,?)',
      [t1, t2, t3],

      (err, result) => {
        if (err) {
          console.log(err);
          return;
        } else {
          //res.send('Values Inserted');
          console.log('Values Inserted');
          return;
        }
      }
    );
  }
});

app.get('/getdata', (req, res) => {
  db.query('SELECT * FROM apijson', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.use(Express.static('./build'));

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Online' + port);
});

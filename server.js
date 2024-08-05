const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const r = require('rethinkdb');

const app = express();
const port = 3000;

let connection = null;

r.connect({ host: 'localhost', port: 28015, db: 'kayit'}, (err, conn) => {
    if (err) throw err;
    connection = conn;
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/kisiler', (req, res) => {
  r.table('kisi').run(connection, (err, cursor) => {
    if (err) throw err;
    cursor.toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
});

app.post('/kisiekle', (req, res) => {
  const { fullname, tel, password } = req.body;
  r.table('kisi').insert({ fullname, tel, password }).run(connection, (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});



app.post('/sil-kisi', (req, res) => {
  const id = req.body.id;
  r.table('kisi').get(id).delete().run(connection, (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.post('/kisi-guncelle', (req, res) => {
  const { id } = req.body;
  const { yeniFullname } = req.body;
  const { yeniTel } = req.body;
  const { yeniPassword } = req.body;
  r.table('kisi').get(id).update({
    fullname: yeniFullname,
    tel: yeniTel,
    password: yeniPassword
  }).run(connection, (err, result) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});
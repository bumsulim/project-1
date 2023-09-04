const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12341234',
  database : 'testdatabase'
});

connection.connect();

app.get('/api/postdata', function (req, res) {
  connection.query('SELECT * FROM postdata ORDER BY post_id DESC', (err, results) => {
    res.send(results)
  })
})

app.listen(4000, () => {
  console.log(`4000번 포트에서 백엔드 서버 열림`)
})
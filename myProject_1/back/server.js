const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12341234',
  database : 'testdatabase'
});

connection.connect()

app.get('/api/postData', function (req, res) {
  connection.query('SELECT * FROM postdata ORDER BY post_id DESC', (err, results) => {
    res.send(results)
  })
})

app.post('/api/postUp', (req, res) => {
  let receivedData = req.body;

  let sql = `INSERT INTO postdata (post_header, post_writer, post_main, post_date) VALUES (?, ?, ?, ?); `

  connection.query(sql, [receivedData[0], receivedData[1], receivedData[2], receivedData[3]], (err, result) => {
    if (err) {
      console.error("에러 발생", err);
    } else {
      console.log("쿼리 결과", result);
    }
  })
})

app.listen(4000, () => {
  console.log(`4000번 포트에서 백엔드 서버 열림`)
})
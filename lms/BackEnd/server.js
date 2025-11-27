const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'lms'
});

app.get('/users', (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.json({ error: err });
    return res.json(result);
  });
});

app.listen(8081, () => {
  console.log("Backend server is running on port 8081");
});

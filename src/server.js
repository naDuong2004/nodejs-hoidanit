require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");
const mysql = require("mysql2");

const app = express();

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use(webRoute);

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.query(
  'SELECT * FROM `Users` WHERE `name` = "Page" AND `age` > 45',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

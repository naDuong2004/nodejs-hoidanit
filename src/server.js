// const express = require("express");
// const configViewEngine = require("./config/viewEngine");
// const webRoute = require("./routes/web");
// const { connection } = require("./config/database");
import express from "express";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";
import webRoute from "./routes/web.js";
import connection from "./config/database.js";

const app = express();

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use(webRoute);

//connection
connection.query(
  // 'SELECT * FROM `Users` WHERE `name` = "Page" AND `age` > 45',
  "SELECT * FROM `Users`",
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

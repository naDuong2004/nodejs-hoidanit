// const express = require("express");
// const configViewEngine = require("./config/viewEngine");
// const webRoute = require("./routes/web");
// const { connection } = require("./config/database");
import express from "express";
import "dotenv/config";
import configViewEngine from "./config/viewEngine.js";
import webRoute from "./routes/web.js";
import pool from "./config/database.js";

const app = express();

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use(webRoute);

//connection
// try {
//   // For pool initialization, see above
//   const [rows, fields] = await pool.query("SELECT 1 FROM Users");
//   // Connection is automatically released when query resolves
// } catch (err) {
//   console.log(err);
// }

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

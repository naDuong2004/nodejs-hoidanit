require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoute = require("./routes/web");

const app = express();

const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);
app.use("/test", webRoute);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

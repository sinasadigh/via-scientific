const colors = require("colors/safe");
const express = require("express");
require("dotenv").config();
const config = require("config");
const app = express();


const port = config.get("applicationPort");
const server = app.listen(port, async () => {
  require("./app/startup/middleware")(app);
  require("app-module-path").addPath(__dirname);
  require("dotenv").config();
  const db = require("./app/startup/db.js"); 
  await db();
  require("./app/startup/prod")(app);
  require("./app/startup/routes")(app);
  console.log(colors.bold(`Listening on port ${port}...`));
  server.emit("appReady");
});
module.exports = server;

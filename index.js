const express = require("express");
require("dotenv").config();
// const Sequelize = require("sequelize");
// const dbConfig = require("./db.config");
//const sequelize = require("./connection");
const db = require("./model/index");
const userRoute = require("./route/user");

const app = express();

app.use(express.json());
const port = process.env.PORT ? process.env.PORT : 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database successfully..");
  })
  .catch((err) => {
    console.error("Unable to connect to db,beacuse" + err);
  })
  .finally(() => {
    //sequelize.close();
  });

//syncing table
db.sequelize.sync();

app.use("/user", userRoute);

app.listen(port, () => {
  console.log("Server is listening at http://localhost:3000");
});

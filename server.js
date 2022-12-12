const express = require('express')
const cors = require("cors");
const { Sequelize, QueryTypes } = require('sequelize');
const mysql = require('mysql2');

const app = express()
const appcors = require("./api/configs")("app");

const UserRoutes = require('./api/routers/user.router')
const MusiqueRoutes = require('./api/routers/musique.router')
const ComposerRoutes = require('./api/routers/composer.router')
const accordRoutes = require('./api/routers/accord.router')

const corsOption = {
  origin: appcors.origin,
  credentials: true,
}

const port = process.env.PORT || 5006
app.use(
  cors(corsOption)
);

// const db = require('./api/configs/db')
// db.sync(
//   console.log('connecter')
// ).then(
//   error => console.log(error)
// ).catch()

const sequelize = new Sequelize('appmusic', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// const users = async () => {
//   const select = await sequelize.query("SELECT * FROM `appuser`", { type: QueryTypes.SELECT })
//   console.log(select)
// };
// users()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const auth = require("./api/middlewares/auth.middleware.js");

app.use("/users", UserRoutes);
app.use("/musique", MusiqueRoutes);
app.use("/composer", ComposerRoutes);
app.use("/accord", accordRoutes)

app.listen(process.env.PORT,() => { console.log("serveur started on : ", process.env.PORT) } );
const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model,} = require('sequelize');
const db = require('../configs/db')

const UserModel = db.define('appuser', {
    Id_appuser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    nom: {
        type: DataTypes.STRING
    },
    prenom: {
        type: DataTypes.STRING
    },
    pseudo: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
      
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false

  // Other model options go here
});
console.log("user", UserModel === db.models.appuser)
module.exports = UserModel
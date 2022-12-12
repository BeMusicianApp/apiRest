const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model,} = require('sequelize');
const db = require('../configs/db')

const MusiqueModel = db.define('musique', {
    Id_musique: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    artiste: {
        type: DataTypes.STRING
    },
    titre: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.INTEGER
    },
    view: {
        type: DataTypes.INTEGER,
      
    },
    private: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    deleted: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'musique'
});

console.log("musique" , MusiqueModel === db.models.musique)
module.exports = MusiqueModel
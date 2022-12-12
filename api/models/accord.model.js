const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model,} = require('sequelize');
const db = require('../configs/db')
const ComposerModel = require('./composer.model')
const MusiqueModel = require('./musique.model')

const AccordModel = db.define('accord', {
    Id_accord: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    name: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    deleted: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false, 
    tableName: 'accord'
});

// AccordModel.hasMany(ComposerModel);
// Invoice.belongsTo(ComposerModel);
// AccordModel.belongsToMany(MusiqueModel, { through: ComposerModel })
// MusiqueModel.belongsToMany(AccordModel, { through : ComposerModel})
// AccordModel.hasMany(ComposerModel, {
//     foreignKey: 'Id_accord'
//   });
//   ComposerModel.belongsTo(AccordModel);

console.log("accord" , AccordModel === db.models.accord)
module.exports = AccordModel
const mysql = require("mysql");
const { Sequelize, DataTypes, Op, Model,} = require('sequelize');
const db = require('../configs/db');
const AccordModel = require("./accord.model");
const MusiqueModel = require("./musique.model");

const ComposerModel = db.define('composer', {
    Id_accord: {
        type: DataTypes.INTEGER,
        references : {
            model : AccordModel,
            key : 'id'
        }
    },
    Id_musique: {
        type: DataTypes.INTEGER,
        references : {
            model : MusiqueModel,
            key : 'id'
        }
      },
    Id_composer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ordre_accord: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'composer'

  // Other model options go here
});

// AccordModel.hasOne(ComposerModel, {
//          foreignKey: 'Id_accord'
//     });
// ComposerModel.belongsTo(AccordModel)
// AccordModel.belongsToMany(MusiqueModel, { through: ComposerModel })
// MusiqueModel.belongsToMany(AccordModel, { through : ComposerModel})

// AccordModel.belongsToMany(MusiqueModel, { through: ComposerModel, uniqueKey: 'Id_accord' })
// MusiqueModel.belongsToMany(AccordModel, { through: ComposerModel, uniqueKey: 'Id_musique' })

console.log("composer" , ComposerModel === db.models.composer)
module.exports = ComposerModel
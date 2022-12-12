const ComposerModel = require('../models/composer.model')
const db = require('../configs/db')
const AccordModel = require('../models/accord.model')
const MusiqueModel = require('../models/musique.model')
const {Sequelize, QueryTypes} = require("sequelize")


// const musicToPlay = async (req,res) => {
//     const musicToPlay = await ComposerModel.findAll({
//         include: [{ model: AccordModel, required: true }]
//         // include:{model : MusiqueModel, require: true}
//       });
//       return JSON.stringify(musicToPlay)
// }

const musicToPlay = async (req,res) => {
    // AccordModel.belongsToMany(MusiqueModel, { through: ComposerModel })
    // MusiqueModel.belongsToMany(AccordModel, { through : ComposerModel})
    const musicToPlay = await db.query(
        `SELECT a.image as accordImage, a.name as AccordName, m.titre as titre, m.artiste as artiste FROM composer c inner join accord a on c.Id_accord = a.Id_accord inner join musique m on m.Id_musique = c.Id_musique where c.Id_musique = ${req} order By c.ordre_accord ASC`,   
        {
            type:QueryTypes.SELECT
    });
      return musicToPlay
}

const createCompo = async(req,res)=>{
    const create = await ComposerModel.bulkCreate(
      req.body.tab
    )
    if(create){
        return create
    }
    else{
        res.status(400).send("Une erreur est survenue")
    }
}
module.exports = {musicToPlay, createCompo}

// SELECT * FROM composer c inner join accord a on c.Id_accord = a.Id_accord inner join musique m on m.Id_musique = c.Id_musique where c.Id_musique = 2
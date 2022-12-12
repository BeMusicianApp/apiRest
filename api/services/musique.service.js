const MusiqueModel = require('../models/musique.model')
const {QueryTypes} = require('sequelize');

const getAllMusique = async ()=> {
    const musiqueList = await MusiqueModel.findAll()
    if(musiqueList.length>=1){
        return musiqueList
    }
    else{
        res.status(400).send("erreur musique indisponible")
    }
}

const createMusique = async (req, res) => {
    const createMusique = await MusiqueModel.create({
        titre :req.body.titre,
        artiste:req.body.artiste,
        image:"img/site/default.png",
    })
    if(createMusique){
        return createMusique
    }
    else{
        res.status(400).send("Une erreur est survenue")
    }
}

module.exports = {getAllMusique, createMusique}
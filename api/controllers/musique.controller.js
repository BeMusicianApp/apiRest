const musiqueService = require('../services/musique.service');

const getAllMusique = async (req, res) => {
    await musiqueService.getAllMusique()
        .then((data)=>{
            res.status(200).send(data);
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message
            });
        })
}
const createMusique = async(req,res) =>{
    await musiqueService.createMusique(req)
        .then((data)=>{
            res.status(200).send(data)
        })
        .catch((err)=>{
            res.status(500).send({
                message : err.message
            })
    })
}
module.exports = {getAllMusique, createMusique}
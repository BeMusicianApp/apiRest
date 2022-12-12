const ComposerService = require('../services/composer.service')

const getMusiqueToPlay= async (req, res) => {
    const musiqueToplay = await ComposerService.musicToPlay(req.params.id)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(400).send({
            message : "Musique introuvable"
        })
    })
}

const createComposer = async(req, res) => {
    const create = await ComposerService.createCompo(req)
    .then((data)=>{
        res.status(200).send(data)
    })
    .catch((err)=>{
        res.status(400).send({
            message : "Musique introuvable"
        })
    })
}


module.exports = {getMusiqueToPlay, createComposer}
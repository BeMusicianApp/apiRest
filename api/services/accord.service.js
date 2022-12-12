const AccordModel = require("../models/accord.model")

const getAllChords = async function(){
    const AccordList = await AccordModel.findAll()
    if(AccordList.length>=1){
        return AccordList
    }
    else{
        res.status(400).send("erreur accords indisponible")
    }
}
module.exports = {getAllChords}
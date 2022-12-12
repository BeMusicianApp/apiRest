const accordService = require('../services/accord.service');

const getAllAccord = async (req, res) => {
    const Accordload = await accordService.getAllChords()
    if(Accordload){
        res.send(Accordload)
    }
    
    // .then((data)=>{
    //     res.status(200).send(data);
    // })
    // .catch((err)=>{
    //     res.status(500).send({
    //         message: err.message
    //     });
    // })
}
module.exports = {getAllAccord}
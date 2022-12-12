const bcrypt = require("bcrypt");
const UserModel = require('../models/user.model');
const generateToken = require('../security/jwt.security');
const {QueryTypes} = require('sequelize');
const appConfig = require('../configs/development/app.config')



const selectOne = (req, res) => {
    const result = `SELECT * FROM appuser WHERE email=${req}`;
    return result
}

const comparePassword = (req, userSelected) => {
    const result = bcrypt.compare(req.body.password, `${appConfig.HASH_PREFIX + userSelected.password}`);
    return result
}

const loginUser = async (req, res)=>{
    const userSelected = await UserModel.findOne({where : {email : req.body.email}})
    const password = await comparePassword(req, userSelected)
    if(password==true){
           res.json({
            id: userSelected.Id_appuser,
            token: generateToken(userSelected.Id_appuser, userSelected.email,userSelected.nom,userSelected.prenom,userSelected.role,userSelected.pseudo
                   )
           })
        }
        else{
           res.status(401).send("Email ou mot de passe Incorect")
        }
    }

    //  const passwordOk = ComparePassword(req.body.password, userSelected.password)
    

module.exports = {loginUser}
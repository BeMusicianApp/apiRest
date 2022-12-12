const jwt = require('jsonwebtoken');


const jwtSecurity = (id, email, nom, prenom, role, pseudo) =>{
    return jwt.sign({id : id, email: email, nom : nom, prenom : prenom, role : role, pseudo : pseudo }, process.env.JWT_SECRET,
        {
            expiresIn: "30d",
        });
}

module.exports = jwtSecurity;
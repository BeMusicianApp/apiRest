const BaseController = require("./base.controller");
const MailerService = require('../services/mailer.service');
const userService = require('../services/user.service');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs")("app");
const appConfig = require("../configs")("app");



  const getUser = async (email) => {
    const service = new UserService();
    const users = await service.select({ where: `email = '${email}'` });
    return users.length === 1 ? users.pop() : null;
  }

  const check = async (req) => {
    const auth = req.cookies.token;
    if (auth) {
      const result = jwt.verify(auth, config.JWT_SECRET);
      if (result) {
        return { result: true, role: result.role, id: result.id_appuser, email: result.email }
      }
    }
    return { result: false, role: 0 }
  }


  const login = async (req, res) => {
    userService.loginUser(req, res).then(
      
    ).catch(

    )
    // const userService = new UserService();
    // const rows = await userService.select({
    //   where: `email='${req.body.email}'`,
    // });
    // //compare pour comparer le mot de passe crypter et non crypter, ajouter la clef au mot de pass de la bdd.

    // if (rows.length === 1) {
    //   const user = rows.pop();
    //   const result = await bcrypt.compare(req.body.password, `${appConfig.HASH_PREFIX + user.password}`);
    //   if (result == true) {
    //     const token = jwt.sign({ email: user.email, role: user.role, id: user.id_appuser }, config.JWT_SECRET);
    //     res.status(200).send({ 
    //       completed: true, cookie: token, role: user.role 
    //     }) 
    //   }
    //   else {
    //     return false;
    //   }
    // }
  }

  const register = async (req) => {
    if (req.method !== 'POST') return { status: 405 };

    const user = await this.getUser(req.body.email);
    if (!user) {
      const payload = { mail: req.body.email, role: 1, password: req.body.password, nom: req.body.nom, prenom: req.body.prenom, pseudo: req.body.pseudo };
      const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
      //SEND MAIL
      const html =
        `
        <b>Confirmez votre inscription : </b>
        <a href="http://localhost:3000/account/validation?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>  
        `;
      await MailerService.send({ to: req.body.email, subject: "Confirmer votre inscription", html });
      return true;
    }
    return false;
  }

  const validate = async (req) => {
    const token = req.body.token;
    let payload
    let user
    try {
      payload = jwt.verify(token, appConfig.JWT_SECRET);
      user = await this.getUser(payload.mail);
    }
    catch {
      return { data: { completed: false, message: "D??sol?? une erreur est survenue ..." } };
    }
    if (payload && !user) {
      const userNew = new UserService();
      const password = (await bcrypt.hash(payload.password, 8)).replace(appConfig.HASH_PREFIX, '');
      const user = await userNew.insertUser({ email: payload.mail, password: password, role: '' + payload.role, nom: payload.nom, prenom: payload.prenom, pseudo: payload.pseudo });
      return user ?
        { data: { completed: true, message: "votre compte est bien activ??, vous pouvez vous connecter" } } :
        { data: { completed: false, message: "Une erreur est survenue ...." } };
    }
    else if (user) {
      return "Adresse d??j?? valid??"
    }
  };

  const renewmail = async (req) => {
    if (req.method !== 'POST') return { status: 405 };

    const user = await this.getUser(req.body.email);
    if (user) {
      const payload = { mail: req.body.email };
      const token = jwt.sign(payload, appConfig.JWT_SECRET, { expiresIn: '1d' });
      const html =
        `
      <b>Confirmez votre inscription : </b>
      <a href="http://localhost:3000/renewpass?t=${encodeURIComponent(token)}" target="_blank">Confirmer</a>     
      `;
      await MailerService.send({ to: req.body.email, subject: "Confirmer votre inscription", html });
      return true;
    }
    return false;
  }

  const renewpass = async (req) => {
    if (req.method !== 'POST') return { status: 405 };
    const token = req.body.token;
    let payload
    let user
    try {
      payload = jwt.verify(token, appConfig.JWT_SECRET);
      user = await this.getUser(payload.mail);
    }
    catch {
      return { data: { completed: false, message: "D??sol?? une erreur est survenue ..." } };
    }
    if (payload) {
      const usermodify = new UserService();
      const password = (await bcrypt.hash(req.body.password1, 8)).replace(appConfig.HASH_PREFIX, '');
      const rows = await usermodify.updateUser({ where: user.Id_appuser, password: password });
      return true;
    }
    return false;
  }

  const deleteUser = async (req) => {
    if (req.method !== 'PATCH') return { status: 405 };
    const token = req.body.token;
    let payload
    try {
      payload = jwt.verify(token, appConfig.JWT_SECRET);
      user = await this.getUser(payload.mail);
    }
    catch {
      return { data: { completed: false, message: "D??sol?? une erreur est survenue ..." } };
    }
    if (payload) {
      const userdeleted = new UserService();
      const rows = await userdeleted.deleteUser({ where: payload.email });
      return true;
    }
    return false;
  }

module.exports = {login};
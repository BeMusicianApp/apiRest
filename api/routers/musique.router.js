const express = require("express");
const MusiqueController = require('../controllers/musique.controller')
const router = express.Router();


router.get("/", MusiqueController.getAllMusique)
router.post("/create", MusiqueController.createMusique)

module.exports = router
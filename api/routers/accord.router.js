const express = require("express");
const accordController = require('../controllers/accord.controller')
const router = express.Router();

router.get("/", accordController.getAllAccord)

module.exports = router
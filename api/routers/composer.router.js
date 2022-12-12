const express = require("express");
const ComposerController = require('../controllers/composer.controller')
const router = express.Router();

router.get("/:id", ComposerController.getMusiqueToPlay)
router.post("/create", ComposerController.createComposer)

module.exports = router
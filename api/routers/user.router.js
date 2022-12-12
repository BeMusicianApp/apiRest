const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller')

router.post("/login", UserController.login)

        // /auth/register
        // this.router.post("/register", async (req, res, next) => {
        //     const response = await this.controller.register(req);
        //     res.json(response);
        // });

        // /auth/validate
        // this.router.post("/validate", async (req, res, next) => {
        //     const response = await this.controller.validate(req);
        //     res.json(response);
        // });

        // /auth/renew
        // this.router.post("/renewmail", async (req, res, next) => {
        //     const response = await this.controller.renewmail(req);
        //     res.json(response);
        // });

        // this.router.post("/renewpass", async (req, res, next) => {
        //     const response = await this.controller.renewpass(req);
        //     res.json(response);
        // });

        // this.router.get("/refresh_token", async (req, res, next) => {
        //     const response = await this.controller.check(req);
        //     res.json(response);
        // });
        // this.router.patch("/delete", async (req, res, next) => {
        //     const response = await this.controller.delete(req);
        //     res.json(response);
        // });

        // /auth
        // this.router.get(" /", async (req, res, next) => {
        //     const response = await this.controller.check(req);
        //     res.json(response);
        //     next(this.controller.check);
        // });

module.exports = router
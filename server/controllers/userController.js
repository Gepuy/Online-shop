const {query} = require("express");
const ApiError = require('../error/ApiError')

class UserController {
    async registration (req, res) {
        const {name} = req.query
        console.log(name)
    }

    async login (req, res) {

    }

    async check(req, res, next) {
        const {id} = req.query;
        if(!id) {
            return next(ApiError.badRequest('There no ID'));
        }
        res.json(id)
    }
}

module.exports = new UserController();
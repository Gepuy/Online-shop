const {Type} = require('../models/models');
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res) {
        const {name} = req.body;
        const type = await Type.create({name});
        return res.json(type);
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async delete(req, res) {
        if (!req.params.id) {
            return res.status(500).json({message: 'Type not found'});
        }
        await Type.destroy({where:{id: req.params.id}});
        return res.json({message: 'Deleted successfully'});
    }
}

module.exports = new TypeController();
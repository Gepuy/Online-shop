const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), deviceController.create);
router.get('/', deviceController.getAll);
router.get('/:id', deviceController.getOne);
router.delete('/delete/:id',checkRole('ADMIN'), deviceController.delete);

module.exports = router;
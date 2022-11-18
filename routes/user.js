const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


router.post('/', userController.crearusuario);
router.get('/', userController.obtenerusuarios);
router.put('/:id', userController.actualizarusuarios);
router.get('/:id', userController.obtenerusuario);
router.delete('/:id', userController.eliminarusuario);
module.exports = router; 
const express = require('express');
const router = express.Router();
const usuarioCtrl = require('../controllers/userController');


// Rutas para usuarios
router.post('/', usuarioCtrl.createUser);        // Crear usuario
router.get('/', usuarioCtrl.getAllUsers);        // Obtener todos los usuarios
router.get('/:id', usuarioCtrl.getUserById);    // Obtener usuario por ID
router.put('/:id', usuarioCtrl.editUser);     // Actualizar usuario
router.delete('/:id', usuarioCtrl.deleteUser);  // Eliminar usuario

module.exports = router;

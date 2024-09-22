const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');


// Rutas para usuarios
router.post('/', empleadoCtrl.createEmpleado);        // Crear usuario
router.get('/', empleadoCtrl.getAllEmpleado);        // Obtener todos los usuarios
router.get('/:id', empleadoCtrl.getEmpleadoById);    // Obtener usuario por ID
router.put('/:id', empleadoCtrl.editEmpleado);     // Actualizar usuario
router.delete('/:id', empleadoCtrl.deleteEmpleado);  // Eliminar usuario

module.exports = router;

const Modelempleado = require('../models/empleado');

const empleadoCtrl = {};

// Crear un usuario
empleadoCtrl.createEmpleado = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await ModelEmpleado.save();
        res.status(201).json({ message: 'Usuario creado con éxito', ModelUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
}

// Obtener todos los usuarios
empleadoCtrl.getAllEmpleados = async (req, res) => {
    try {
        const users = await ModelEmpleado.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

// Obtener usuario por ID
empleadoCtrl.getEmpleadoById = async (req, res) => {
    try {
        const user = await ModelEmpleado.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
}

// Actualizar usuario
empleadoCtrl.editEmpleado = async (req, res) => {
    try {
        const user = await ModelEmpleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado con éxito', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};

// Eliminar usuario
empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        const user = await ModelEmpleado.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
}


module.exports =empleadoCtrl;

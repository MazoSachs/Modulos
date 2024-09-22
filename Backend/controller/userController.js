const ModelUser = require('../models/userModel');

const usuarioCtrl = {};

// Crear un usuario
usuarioCtrl.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await ModelUser.save();
        res.status(201).json({ message: 'Usuario creado con éxito', ModelUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario', error });
    }
}

// Obtener todos los usuarios
usuarioCtrl.getAllUsers = async (req, res) => {
    try {
        const users = await ModelUser.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }
}

// Obtener usuario por ID
usuarioCtrl.getUserById = async (req, res) => {
    try {
        const user = await ModelUser.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el usuario', error });
    }
}

// Actualizar usuario
usuarioCtrl.editUser = async (req, res) => {
    try {
        const user = await ModelUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario actualizado con éxito', user });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};

// Eliminar usuario
usuarioCtrl.deleteUser = async (req, res) => {
    try {
        const user = await ModelUser.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }
}


module.exports =usuarioCtrl;

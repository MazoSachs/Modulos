const mongoose = require('mongoose');

const empleadoModel = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true,
            unique: true
        },
        office: {
            type: String,
            required: true  
        },
        salary: {
            type: Number,
            required: true 
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Modelempleado = mongoose.model('empleados', empleadoModel);
module.exports = Modelempleado;

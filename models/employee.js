const { Schema, model } = require("mongoose");

const employeeSchema = Schema({
    nombre: {
        type: String,
        required: true,
        unique: false
    },
    cedula:{
        type: String,
        unique: true,
        required: true
    },
    salario:{
        type: Number,
        required: true
    },
    puesto: {
        type: String,
        required: true
    }
});

module.exports = model('Employee', employeeSchema );
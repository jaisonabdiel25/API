const { response } = require("express");
const employee = require("../models/employee");

const saveEmployee = async(req, res) => {
    const {nombre, cedula, salario, puesto} = req.body;

  try {
    const dbEmployee = new employee(req.body);

    //Guaradar informacion en la BD
    await dbEmployee.save();

    return res.status(201).json({
      ok: true,
      ID: dbEmployee.id,
      name: nombre,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      message: "No se pudo crear el empleado",
    });
  }
}

const getEmployee = async (req, res = response) => {
  const employeeId = req.params._id;
  console.log(employeeId);

  await employee.findById(employeeId, (err, employee) => {
    if (err) {
      return res.status(500).json({ message: "Error al devolver los datos" });
    }
    console.log(employee);
    if (!employee) {
      return res.status(404).json({ message: "El empleado no existe" });
    }
    console.log(employee);
    return res.status(200).json({ employee });
  });
}

const getEmployees = async (req, res = response) => {
  await employee.find({})
    .sort("-salario")
    .exec((err, employees) => {
      if (err) {
        return res.status(500).json({ message: "Error al devolver los datos" });
      }
      if (!employees) {
        return res
          .status(404)
          .json({ message: "No hay empleados para mostrar" });
      }
      return res.status(200).json({ employees });
    });
};

module.exports = {
    saveEmployee,
    getEmployee,
    getEmployees
}
const express = require('express');
const {saveEmployee, getEmployee, getEmployees} = require('../controllers/employe');

const router = express.Router();

router.post('/new', saveEmployee);
router.get('/get/:_id', getEmployee);
router.get('/getEmployees', getEmployees);

module.exports = router;
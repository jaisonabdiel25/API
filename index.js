const express = require('express');
const cors = require('cors');
const app = express();
const { dbConnection } = require("./database/config");

//Setting
app.set('port', process.env.PORT || 4000);

//Conect to db
dbConnection();

//Cors
app.use(cors());

//Middlewares
app.use(express.json());

//Routes
app.use('/api/employee', require('./routes/employe'));

//Start server
app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});
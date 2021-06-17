const mongoose = require('mongoose');

const dbConnection = async() =>{
    
    try{
        await mongoose.connect('mongodb+srv://root:12345@prestamos.4lkrg.mongodb.net/android_estudio', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('BD Online');
    }
    catch(error) {
        console.log(error);
        throw new Error('Error al realizar coneccion a BD');
    }
}

module.exports = {
    dbConnection
}
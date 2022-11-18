const mongoose = require('mongoose');
require('dotenv').config({path:  'variable.env'});

const conectarDBUsuarios= async() =>{
    try {
       await mongoose.connect(process.env.DB_MONGO_USUARIOS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
       })
       console.log('DB user conectada correctamente')
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
module.exports = conectarDBUsuarios
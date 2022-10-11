// Aqui conexion a la base de datos de mongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('MongoDB connected')
}).catch(err => {
    console.log('Error connecting to MongoDB: ', err);
})

module.exports = {
    conn: mongoose
}
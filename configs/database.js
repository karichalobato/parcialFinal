const mongoose = requiere('mongoose');
const {mongodb} = requiere('./keys');

mongoose.connect(mongodb.URI, {
    useNewUrlParser:true,
    useCreateIndex:true
}).then(db => console.log('conexion exitosa!!'))
.catch(err=> console.err(err));

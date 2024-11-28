// models/theOffice.models.js
import mongoose from 'mongoose';

const personajeSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String, // URL de la imagen del personaje
        required: true,
    },
});

const Personaje = mongoose.model('Personaje', personajeSchema);

export default Personaje;

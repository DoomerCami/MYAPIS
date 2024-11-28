import mongoose from 'mongoose';

const ranmaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    edad: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    }
});

const Ranma = mongoose.model('Ranma', ranmaSchema);
export default Ranma;

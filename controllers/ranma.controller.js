import Ranma from '../models/ranma.models.js';
import mongoose from 'mongoose';

// Obtener todos los personajes
export const getAllRanma = async (req, res) => {
    console.log('Obtiene todos los personajes de Ranma 1/2');
    try {
        const ranma = await Ranma.find({}, { __v: 0 });
        if (ranma.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron personajes'
            });
        }
        return res.status(200).json({
            ranma
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los personajes'
        });
    }
};

export const putPersonaje = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    
    try {
        // Validar si el ID es correcto
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        // Buscar y actualizar el personaje
        const personaje = await Personaje.findByIdAndUpdate(id, body, { new: true, runValidators: true });

        // Verificar si el personaje existe
        if (!personaje) {
            return res.status(404).json({
                msg: 'Personaje no encontrado'
            });
        }

        // Si todo va bien, devolver el personaje actualizado
        return res.status(200).json({
            personaje
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg: 'Error al actualizar el personaje',
            error: error.message // Devuelve el mensaje de error
        });
    }
};

// Obtener un personaje por ID
export const getRanmaById = async (req, res) => {
    console.log('Personaje por ID');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const ranma = await Ranma.findById(id);
        if (!ranma) {
            return res.status(404).json({
                msg: 'Personaje no encontrado'
            });
        }
        return res.status(200).json({
            ranma
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el personaje'
        });
    }
};

// Crear un personaje
export const postRanma = async (req, res) => {
    console.log('Crear nuevo personaje');
    const body = req.body;
    const ranma = new Ranma(body);
    try {
        const validationError = ranma.validateSync();
        if (validationError) {
            const errorMessages = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                error: errorMessages
            });
        }
        await ranma.save();
        return res.status(201).json({
            ranma
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al guardar el personaje'
        });
    }
};

// Actualizar un personaje por ID
export const updateRanma = async (req, res) => {
    console.log('Actualizar personaje');
    const id = req.params.id;
    const body = req.body;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const ranma = await Ranma.findByIdAndUpdate(id, body, { new: true, runValidators: true });
        if (!ranma) {
            return res.status(404).json({
                msg: 'Personaje no encontrado'
            });
        }
        return res.status(200).json({
            ranma
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el personaje'
        });
    }
};

// Eliminar un personaje por ID
export const deleteRanma = async (req, res) => {
    console.log('Eliminar personaje');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }
        const ranma = await Ranma.findByIdAndDelete(id);
        if (!ranma) {
            return res.status(404).json({
                msg: 'Personaje no encontrado'
            });
        }
        return res.status(200).json({
            msg: 'Personaje eliminado',
            ranma
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el personaje'
        });
    }
};

export const addAllRanma = async (req, res) => {
    console.log('Agregar múltiples personajes');
    const ranma = req.body; // Se espera un array de personajes en el cuerpo de la petición.
    try {
        await Ranma.insertMany(ranma);
        return res.status(201).json({
            msg: 'Personajes agregados exitosamente'
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al agregar los personajes',
            error: error.message
        });
    }
};

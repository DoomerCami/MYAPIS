import { Router } from 'express';
import {
    getAllRanma,
    addAllRanma,
    updateRanma,
    deleteRanma,
    getRanmaById
} from '../controllers/ranma.controller.js';

const ranma = Router();

// Obtener todos los personajes
ranma.get('/', getAllRanma);

// Obtener un personaje por su ID
ranma.get('/:id', getRanmaById);

// Crear/agregar personajes
ranma.post('/', addAllRanma);

// Actualizar un personaje por su ID
ranma.put('/:id', updateRanma);

// Eliminar un personaje por su ID
ranma.delete('/:id', deleteRanma);

export default ranma;

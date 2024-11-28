// routes/theOffice.routes.js
import { Router } from 'express';
import {
    getAllPersonajes,
    getPersonajeById,
    addAllPersonajes
} from '../controllers/theOffice.controller.js';

const router = Router();

// Rutas para manejar personajes
router.get('/', getAllPersonajes); // Obtener todos los personajes
router.get('/:id', getPersonajeById); // Obtener personaje por ID
router.post('/', addAllPersonajes); // Agregar un personaje


export default router;

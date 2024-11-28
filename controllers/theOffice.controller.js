// controllers/theOffice.controller.js
import Personaje from '../models/theOffice.models.js';
import mongoose from 'mongoose';

// Obtener todos los personajes
export const getAllPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.find();
        if (personajes.length === 0) {
            return res.status(404).json({
                msg: 'No se encontraron personajes.',
            });
        }
        return res.status(200).json(personajes);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener los personajes.',
        });
    }
};

// Obtener un personaje por ID
export const getPersonajeById = async (req, res) => {
    const id = req.params.id;
    try {
        const personaje = await Personaje.findById(id);
        if (!personaje) {
            return res.status(404).json({
                msg: 'Personaje no encontrado.',
            });
        }
        return res.status(200).json(personaje);
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el personaje.',
        });
    }
};

// Agregar un personaje
export const addAllPersonajes = async (req, res) => {
    const personajes = [
        {
            "nombre": "Michael Scott",
            "puesto": "Regional Manager",
            "descripcion": "Michael Scott es el gerente regional de Dunder Mifflin en Scranton. Es conocido por sus bromas inapropiadas, su amor por ser el centro de atención y sus intentos de ser querido por sus empleados.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/d/df/MichaelScott.png"
        },
        {
            "nombre": "Jim Halpert",
            "puesto": "Salesman",
            "descripcion": "Jim Halpert es un vendedor de Dunder Mifflin. Es conocido por su sentido del humor, sus bromas a su compañero Dwight y su relación romántica con Pam.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/6/6d/Jim_Halpert.jpg"
        },
        {
            "nombre": "Pam Beesly",
            "puesto": "Receptionist",
            "descripcion": "Pam Beesly es la recepcionista de Dunder Mifflin Scranton. Al principio de la serie está comprometida con Roy, pero más tarde desarrolla una relación con Jim.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/5/5f/Pam_Beesly.jpg"
        },
        {
            "nombre": "Dwight Schrute",
            "puesto": "Assistant Regional Manager",
            "descripcion": "Dwight Schrute es el vendedor más eficiente de Dunder Mifflin. Es extremadamente competitivo y serio, además de ser el mejor amigo y también el peor enemigo de Jim.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/6/68/Dwight_Schrute.jpg"
        },
        {
            "nombre": "Ryan Howard",
            "puesto": "Temp",
            "descripcion": "Ryan Howard comienza como becario en Dunder Mifflin, pero rápidamente asciende a un puesto de alto rango. Se convierte en una figura egocéntrica, pero eventualmente se ve reducido a ser nuevamente un simple temp.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/5/53/Ryan_Howard.jpg"
        },
        {
            "nombre": "Angela Martin",
            "puesto": "Head of Accounting",
            "descripcion": "Angela Martin es la jefa del departamento de contabilidad. Es conocida por su actitud severa y por ser una persona muy religiosa. Tiene una relación secreta con Dwight durante varias temporadas.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/f/fd/Angela_Martin.jpg"
        },
        {
            "nombre": "Stanley Hudson",
            "puesto": "Salesman",
            "descripcion": "Stanley Hudson es un vendedor en Dunder Mifflin. Es conocido por su actitud tranquila, amor por las siestas y su aversión al trabajo, especialmente en relación con las reuniones innecesarias.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/5/52/Stanley_Hudson.jpg"
        },
        {
            "nombre": "Toby Flenderson",
            "puesto": "Human Resources Representative",
            "descripcion": "Toby Flenderson es el representante de recursos humanos en Dunder Mifflin. A menudo es ignorado y su presencia no es muy apreciada, especialmente por Michael, quien lo ve como un 'enemigo'.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/e/e2/Toby_Flenderson.jpg"
        },
        {
            "nombre": "Oscar Martinez",
            "puesto": "Accountant",
            "descripcion": "Oscar Martinez es un contador en Dunder Mifflin. Es inteligente, abierto y se ve envuelto en diversas situaciones debido a su orientación sexual, lo que le da un enfoque único sobre la vida en la oficina.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/3/3b/Oscar_Martinez.jpg"
        },
        {
            "nombre": "Creed Bratton",
            "puesto": "Quality Assurance Director",
            "descripcion": "Creed Bratton es el director de control de calidad en Dunder Mifflin. Es un personaje misterioso y excéntrico, cuyas acciones y declaraciones a menudo son impredecibles.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/7/7d/Creed_Bratton.jpg"
        },
        {
            "nombre": "Kelly Kapoor",
            "puesto": "Customer Service Representative",
            "descripcion": "Kelly Kapoor es la representante de atención al cliente en Dunder Mifflin. Es una persona extremadamente extrovertida, obsesionada con las novelas románticas y siempre tiene algo que decir sobre sus relaciones amorosas.",
            "imagen": "https://upload.wikimedia.org/wikipedia/en/4/44/Kelly_Kapoor.jpg"
        }
    ];

    try {
        await Personaje.insertMany(personajes);
        return res.status(201).json({
            msg: 'Todos los personajes han sido agregados con éxito.'
        });
    } catch (error) {
        console.error(error); // Muestra el error en la consola para más detalles
        return res.status(500).json({
            msg: 'Error al agregar los personajes.',
            error: error.message // Devuelve el mensaje de error
        });
    }
};


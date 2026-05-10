const express = require('express');

const router = express.Router();

const {
    obtenerLibros,
    obtenerLibrosDisponibles,
    obtenerLibrosPorCategoria
} = require('../controllers/libroController');

router.get('/', obtenerLibros);

router.get('/disponibles', obtenerLibrosDisponibles);

router.get('/categoria/:categoria', obtenerLibrosPorCategoria);

module.exports = router;
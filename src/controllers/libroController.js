const libroService = require('../services/libroService');

function obtenerLibros(req, res) {

    try {

        const libros = libroService.extraerLibros();

        res.status(200).json({
            exito: true,
            total: libros.length,
            datos: libros
        });

    } catch (error) {

        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener libros',
            error: error.message
        });

    }

}

function obtenerLibrosDisponibles(req, res) {

    try {

        const libros = libroService.extraerLibros();

        const disponibles = libros.filter(
            libro => libro.estado === 'disponible'
        );

        res.status(200).json({
            exito: true,
            total: disponibles.length,
            datos: disponibles
        });

    } catch (error) {

        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener libros disponibles',
            error: error.message
        });

    }

}

function obtenerLibrosPorCategoria(req, res) {

    try {

        const categoria = req.params.categoria;

        if (!categoria || categoria.trim() === '') {

            return res.status(400).json({
                exito: false,
                mensaje: 'Debe ingresar una categoría válida'
            });

        }

        const libros = libroService.extraerLibros();

        const filtrados = libros.filter(
            libro => libro.categoria.toLowerCase() === categoria.toLowerCase()
        );

        if (filtrados.length === 0) {

            return res.status(404).json({
                exito: false,
                mensaje: `No se encontraron libros para la categoría "${categoria}"`
            });

        }

        res.status(200).json({
            exito: true,
            categoria: categoria,
            total: filtrados.length,
            datos: filtrados
        });

    } catch (error) {

        res.status(500).json({
            exito: false,
            mensaje: 'Error al buscar libros por categoría',
            error: error.message
        });

    }

}

module.exports = {
    obtenerLibros,
    obtenerLibrosDisponibles,
    obtenerLibrosPorCategoria
};
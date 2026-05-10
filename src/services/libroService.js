const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

function extraerLibros() {

    const rutaArchivo = path.join(
        __dirname,
        '../../public/catalogo.html'
    );

    if (!fs.existsSync(rutaArchivo)) {

        throw new Error('El archivo catalogo.html no existe');

    }

    const html = fs.readFileSync(rutaArchivo, 'utf-8');

    if (!html || html.trim() === '') {

        throw new Error('El HTML está vacío');

    }

    const $ = cheerio.load(html);

    const libros = [];

    $('.libro').each((index, elemento) => {

        const libro = {

            id: Number($(elemento).attr('data-id')),

            categoria: $(elemento)
                .attr('data-categoria'),

            titulo: $(elemento)
                .find('.titulo')
                .text()
                .trim(),

            autor: $(elemento)
                .find('.autor')
                .text()
                .trim(),

            isbn: $(elemento)
                .find('.isbn')
                .text()
                .replace('ISBN:', '')
                .trim(),

            anio: Number(
                $(elemento)
                .find('.anio')
                .text()
                .replace('Año:', '')
                .trim()
            ),

            editorial: $(elemento)
                .find('.editorial')
                .text()
                .replace('Editorial:', '')
                .trim(),

            estado: $(elemento)
                .find('.estado')
                .text()
                .trim()
                .toLowerCase(),

            ubicacion: $(elemento)
                .find('.ubicacion')
                .text()
                .trim()
        };

        libros.push(libro);

    });

    return libros;

}

module.exports = {
    extraerLibros
};
const express = require('express');
const libroRoutes = require('./src/routes/libroRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        mensaje: 'API Biblioteca IP Santo Tomás funcionando correctamente'
    });
});

app.use('/api/libros', libroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
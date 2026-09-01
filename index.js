const express = require('express');

const app = express();

const PORT = 3000;

// Configurar ejs
app.set('view engine', 'ejs');

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

// Rutas
app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

// Rutas
app.get('/servicios', (req, res) => {
    res.render('servicios');
});

// Rutas
app.get('/contacto', (req, res) => {
    res.render('contacto'); 
});

// Levantar Servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
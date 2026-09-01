const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// Rutas
app.get('/servicios', (req, res) => {
    res.send('<h1>Servicios</h1>');
});

// Levantar Servidor
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
require('dotenv').config()

const express = require('express');

const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// Configurar ejs
app.set('view engine', 'ejs');

// MIDDLEWARES
// Permite leer información de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurar estáticos
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

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
    res.render('contacto', { mensajeExito: null }); 
});

app.post('/contacto', (req, res) => {
    // Aquí puedes manejar los datos del formulario de contacto
    const { nombre, correo, asunto, mensaje } = req.body;
    console.log(`Nombre: ${nombre}, Correo: ${correo}, Asunto: ${asunto}, Mensaje: ${mensaje}`);
    res.render('contacto', { mensajeExito: 'Formulario enviado correctamente' });
});

// Levantar Servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
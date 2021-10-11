const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

// Importando rutas
const songRoutes = require('./routes/song.js');

// Config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'pass',
    port: 3306,
    database: 'crudnode'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Rutas
app.use('/', songRoutes);

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// Levantando servidor
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto:', app.get('port'));
});
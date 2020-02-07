const express = require('express'),
app = express(),
path = require('path');

//Middleware que nos permite buscar los archivos de la carpeta public

app.use(express.static(path.join(__dirname, '/public')));

//Crear las rutas de la app

app.get('/', (req, res)=>{
res.sendFile(`${__dirname}/views/index.html`);
});

app.route('/acerca').get((req, res)=>{
        res.sendFile(`${__dirname}/views/acerca.html`)
        });

app.route('/experiencia').get((req, res)=>{
        res.sendFile(`${__dirname}/views/experiencia.html`)
});

app.route('/estudios').get((req, res)=>{
        res.sendFile(`${__dirname}/views/estudios.html`)
});

app.route('/aptitudes').get((req, res)=>{
        res.sendFile(`${__dirname}/views/aptitudes.html`)
});

app.route('/contacto').get((req, res)=>{
        res.sendFile(`${__dirname}/views/contacto.html`)
});

app.listen(8080);
console.log('Conexión exitosa con Express!');

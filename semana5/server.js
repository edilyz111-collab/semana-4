const express = require('express');
const app = express();

// Esto permite que el servidor entienda datos en formato JSON
app.use(express.json());

// Ruta 1: Inicio
app.get('/', (req, res) => {
  res.send('Servidor activo');
});

// Ruta 2: Saludo
app.get('/saludo', (req, res) => {
  res.send('Hola comunidad');
});

// Ruta 3: Mensaje personalizado
app.get('/mensaje/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send('Hola ' + nombre);
});

// Ruta 4: Enviar Reporte (Método POST)
app.post('/reporte', (req, res) => {
  const mensaje = req.body.mensaje;
  res.json({
    estado: "Reporte recibido",
    mensaje: mensaje
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});
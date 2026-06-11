const express = require('express');
const app = express();

app.use(express.json());

// RUTA DE INICIO (Para que la pestaña emergente no salga en blanco o con error)
app.get('/', (req, res) => {
  res.send('Servidor de la semana 6 activo y escuchando');
});

// Ruta 1: Registro general de datos
app.post('/registro', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    mensaje: mensaje
  });
});

// Ruta 2: Simulación de Registro de Incidencias Comunitarias
app.post('/incidencia', (req, res) => {
  const tipo = req.body.tipo;
  const descripcion = req.body.descripcion;

  res.json({
    mensaje: "Incidencia registrada",
    tipo: tipo,
    descripcion: descripcion
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

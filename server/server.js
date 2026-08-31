const express = require('express');
const cors = require('cors');
const path = require('path');
const catalogo = require('./data/servicios.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta base
app.get('/', (req, res) => {
  res.send('Servidor de Birra y Bíceps corriendo. Catálogo en /api/servicios');
});

// Obtener catálogo completo
app.get('/api/servicios', (req, res) => {
  res.json(catalogo);
});

// Endpoints individuales
app.get('/api/planes', (req, res) => {
  res.json(catalogo.planes);
});

app.get('/api/sucursales', (req, res) => {
  res.json(catalogo.sucursales);
});

app.get('/api/adicionales', (req, res) => {
  res.json(catalogo.adicionales);
});

app.use('/data', express.static(path.join(__dirname, 'data')));

app.listen(PORT, () => {
  console.log(`Servidor Birra y Bíceps escuchando en http://localhost:${PORT}`);
  console.log(`API Servicios: http://localhost:${PORT}/api/servicios`);
});

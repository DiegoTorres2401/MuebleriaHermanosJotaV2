require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productosRoutes = require('./routes/productosRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const ordenesRoutes = require("./routes/ordenesRoutes");
const { loggerMiddleware } = require('./middlewares/logger');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(loggerMiddleware);
app.use(express.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error al conectar a MongoDB:', err));

app.use('/api/productos', productosRoutes);

app.use('/api/users', userRoutes);

app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.json({
    message: 'API de Productos - Muebleria Hermanos Jota',
    endpoints: {
      productos: '/api/productos',
      productoById: '/api/productos/:id'
    }
  });
});

app.use('/api/ordenes', ordenesRoutes);

app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status,
      message: err.message || 'Ocurrió un error en el servidor.'
    }
  });
});



app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

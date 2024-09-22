const express = require("express");
const cors = require("cors");
const dbconnect = require("./config/");
const app = express();
const router = express.Router();


// Middlewares
app.use(cors({ origin: 'http://localhost:4200' })); // Solo definimos CORS una vez
app.use(express.json()); // Definimos express.json() solo una vez

// Rutas
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/empleados', require('./routes/empleado.routes'));

// Puerto desde variable de entorno o por defecto
const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Conectar a la base de datos
dbconnect();
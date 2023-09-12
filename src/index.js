const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');  
const cors = require('cors');


const adminRoutes = require('./routes/admin.routes');

const app =express();

require('./routes/swaggerConfig')(app); // Configuración de Swagger


app.use(cors()); //comunicar ambos archivos
app.use(morgan('dev'));
// Configura body-parser para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoutes);

// Middlewares
app.use(express.json());

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(3001); //puerto que se ejecuta
console.log('El servidor se ejecuta en el puerto 3001')
/*
import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/tasks.routes.js";
import { port } from "./config.js";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API" });
});

app.use(router);

// handling errors
app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message,
  });
});

app.listen(port);
console.log(`Server on port ${port}`);

*/
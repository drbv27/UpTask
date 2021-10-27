/* import { Express } from "express"; */
/* import express from "express"; */
const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

//helpers con algunas funciones
const helpers = require("./helpers");

//Crear la conexion a la DB
const db = require("./config/db");

//Importar el modelo
require("./models/Proyectos");

db.sync()
  .then(() => console.log("Conectado al servidor"))
  .catch((error) => console.log(error));

//crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static("public"));

//Habiltar pug
app.set("view engine", "pug");
//Añadir la carpeta de vistas
app.set("views", path.join(__dirname, "./views"));

//Pasar var dump a la aplicacion
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

//aprendiendo middleware
/* app.use((req, res, next) => {
  const fecha = new Date();
  res.locals.year = fecha.getFullYear();
  console.log("yo soy middleware");
  next();
}); */

//Habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extend: true }));

app.use("/", routes());

app.listen(7000);

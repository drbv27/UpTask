/* import { Express } from "express"; */
/* import express from "express"; */
const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");

//crear una app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static("public"));

//Habiltar pug
app.set("view engine", "pug");
//Añadir la carpeta de vistas
app.set("views", path.join(__dirname, "./views"));

//Habilitar body parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extend: true }));

app.use("/", routes());

app.listen(7000);

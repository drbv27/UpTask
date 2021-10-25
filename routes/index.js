//express router
const express = require("express");
const router = express.Router();

//importar controlador
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  //ruta para el home
  router.get("/", proyectosController.proyectosHome);
  return router;
};

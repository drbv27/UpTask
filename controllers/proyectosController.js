const Proyectos = require("../models/Proyecto");
exports.proyectosHome = (req, res) => {
  res.render("index", {
    nombrePagina: "Proyectos",
  }); //es el pug
};

exports.formularioProyecto = (req, res) => {
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
  });
};

exports.nuevoProyecto = (req, res) => {
  //Enviar a la consola lo que el usuario escriba
  /* console.log(req.body); */
  //validar que si tengamos algo en el input
  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un nombre al proyecto" });
  }
  //si hay errores
  if (errores.length > 0) {
    res.render("nuevoProyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
    });
  } else {
    //no hay errores
    //Insertar en la DB.
    Proyectos.create({ nombre })
      .then(() => {
        console.log("insertado correctamente");
      })
      .catch((error) => console.log(error));
  }
};

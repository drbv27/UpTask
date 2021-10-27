const Proyectos = require("../models/Proyectos");

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  //es lo mismo que SELECT * from proyectos
  res.render("index", {
    nombrePagina: "Proyectos " /* + res.locals.year */,
    proyectos,
  }); //es el pug
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render("nuevoProyecto", {
    nombrePagina: "Nuevo Proyecto",
    proyectos,
  });
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
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
      proyectos,
    });
  } else {
    //no hay errores
    //Insertar en la DB.
    const proyecto = await Proyectos.create({ nombre });
    res.redirect("/");
  }
};

const express = require("express"); //Importamos la librería que estamos utilizando
const UserRoutes = express.Router(); // Creamos el enrutado

const { registerLargo } = require("../controllers/user.controllers"); // Nos traemos el controlador de la ruta

//!------------------------------------------------------------------------
//?--------------------------------RUTAS SIN REDIRECT----------------------
//!------------------------------------------------------------------------

UserRoutes.post(
  "/registerLargo", //ruta específica del endpoint
  /*middleware de subida de fichero */ registerLargo //y función del controlador
);

//como el indez consume las rutas, hay que hacer un module.exports para exportar las rutas
module.exports = UserRoutes;

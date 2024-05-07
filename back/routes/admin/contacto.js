// contacto.js
var express = require('express');
var router = express.Router();
var contactoModel = require("./../../models/contactoModel");

// Manejar la solicitud POST del formulario de contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    // Guardar el comentario en la base de datos
    await contactoModel.guardarComentario(nombre, email, mensaje);

    // Redirigir a una página de confirmación o a la misma página del formulario
    res.redirect('/contacto');
  } catch (error) {
    console.error('Error al guardar el comentario:', error);
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

module.exports = router;

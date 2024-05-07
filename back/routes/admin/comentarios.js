// comentarios.js
var express = require('express');
var router = express.Router();
var comentariosModel = require("./../../models/comentariosModel");

// Manejar la solicitud POST del formulario de comentarios
router.post('/', async (req, res) => {
  try {
    const { nombre, comentario } = req.body;

    // Guardar el comentario de ex alumno en la base de datos
    await comentariosModel.guardarComentario(nombre, comentario);

    // Redirigir a una página de confirmación o a la misma página del formulario
    res.redirect('/comentarios');
  } catch (error) {
    console.error('Error al guardar el comentario de ex alumno:', error);
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

module.exports = router;

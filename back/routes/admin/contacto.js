// contacto.js
var express = require('express');
var router = express.Router();
var contactoModel = require("./../../models/contactoModel");


router.get('/', (req, res, next) =>{
  res.render('admin/contacto' ,{
    layout: "admin/layout",
   });
});

// Manejar la solicitud POST del formulario de contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    if (req.body.nombre != "" && req.body.email!= "" && req.body.mensaje!=""){
      await contactoModel.guardarComentario(nombre, email, mensaje); 
      res.redirect("/admin/contacto")
    }
   
    // Redirigir a una página de confirmación o a la misma página del formulario
    res.redirect('/admin/contacto');
  } catch (error) {
    console.error('Error al guardar el comentario:', error);
    res.status(500).send('Ocurrió un error al procesar tu solicitud.');
  }
});

module.exports = router;

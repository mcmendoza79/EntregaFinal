var express = require('express');
var router = express.Router();
var novedadesModel = require("./../models/novedadesModel");
const contactoModel = require('./../models/contactoModel');
var cloudinary=require("cloudinary").v2;
const nodemailer = require('nodemailer');
require('dotenv').config();


router.get('/novedades', async function(req, res, next) {
  
      let novedades = await novedadesModel.getNovedades();

      novedades = novedades.map(novedad => {
          if (novedad.img_id) {
              const imagen = cloudinary.url(novedad.img_id, {
                  width: 100,
                  height: 100,
                  crop: "fill"
              });
              return {
                  ...novedad,
                  imagen
              }
             } else{
         
              return {
                  ...novedad,
                  imagen:""
              };
          }
      });

      res.json(novedades);
  
});



router.post('/contacto', async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;

    // Guardar en la base de datos de contacto
    await contactoModel.guardarComentario(nombre, email, mensaje);

    // Enviar correo electrónico
    const mail = {
      to: 'macemendoza79@gmail.com',
      subject: 'Contacto web',
      html: `${nombre} se contactó a través de la web y quiere más información a este correo:
       ${email} <br> Además, hizo el siguiente comentario: ${mensaje}<br> 
       `
    };

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transport.sendMail(mail);

    res.status(201).json({
      error: false,
      message: 'Mensaje enviado'
    });
  } catch (error) {
    console.error('Error al procesar el formulario de contacto:', error);
    res.status(500).json({
      error: true,
      message: 'Ocurrió un error al procesar el formulario de contacto'
    });
  }
});

module.exports = router;
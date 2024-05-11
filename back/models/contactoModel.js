// contactoModel.js
var pool = require('./bd');

async function guardarComentario(nombre, email, mensaje) {
  try {
    var query = 'INSERT INTO contacto SET ?';
    var rows = await pool.query(query, { nombre, email, mensaje });
    return rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { guardarComentario };

// contactoModel.js
const pool = require('./bd');

async function guardarComentario(nombre, email, mensaje) {
  try {
    const query = 'INSERT INTO contacto (nombre, email, mensaje, fecha_creacion) VALUES (?, ?, ?, CURRENT_TIMESTAMP)';
    const result = await pool.query(query, [nombre, email, mensaje]);
    return result.insertId;
  } catch (error) {
    console.error('Error al guardar el comentario en la base de datos:', error);
    throw error;
  }
}

module.exports = { guardarComentario };

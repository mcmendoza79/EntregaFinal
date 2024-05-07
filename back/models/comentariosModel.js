// comentariosModel.js
const pool = require('./bd');

async function guardarComentario(nombre, comentario) {
  try {
    const query = 'INSERT INTO comentarios_ex_alumnos (nombre, comentario, fecha_creacion) VALUES (?, ?, CURRENT_TIMESTAMP)';
    const result = await pool.query(query, [nombre, comentario]);
    return result.insertId;
  } catch (error) {
    console.error('Error al guardar el comentario de ex alumno en la base de datos:', error);
    throw error;
  }
}

module.exports = { guardarComentario };

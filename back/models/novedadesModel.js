var pool = require('./bd');

async function getNovedades() {
    var query= "SELECT * FROM novedades order by id desc ";
    var rows= await pool.query(query);
    return rows;
 }

 async function deleteNovedadById(id) {
    var query= "delete FROM novedades where id = ?";
    var rows= await pool.query(query, [id]);
    return rows;
 } 

 async function getNovedadesById(id) {
    var query= "SELECT * FROM novedades where id = ?";
    var rows= await pool.query(query,[id]);
    return rows[0];
 }
 
async function modificarNovedadesById(obj, id) {
    try{
        var query= "update novedades set ? where id=?";
        var rows= await pool.query(query,[obj, id]);
        return rows;
     }  catch(error){
        throw error;
    }
}

async function insertNovedades(obj) {
    try {
      var query = "INSERT INTO novedades SET ?";
      var rows = await pool.query(query, [obj]);
      return rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
module.exports = {getNovedades, deleteNovedadById, insertNovedades, getNovedadesById,modificarNovedadesById};

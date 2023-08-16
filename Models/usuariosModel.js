var pool = require('./bd');
var md5 = require('md5');

async function resultados (nombre , apellido){
    try{
        var query ='select * from empleados.sql ';
        var rows = await pool.query(query,[nombre , apellido]);
        return rows[0];
        }catch(error){
            console.log(error);
        }
}
module.exports = {resultados}
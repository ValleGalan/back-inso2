const pool = require('../db.js');



const getAllUsers= async (req,res, next) => {
    //res.send('hola mundo usuario')
   // const result= await pool.query('select now() ');
   // console.log(result);
    //res.json(result.rows[0].now)
   // res.send('obtener lista de usuarios');
    try {
        const allUser = await pool.query("SELECT * FROM usuario");
        res.json(allUser.rows);
    } catch (error) {
        next(error);
    }
}

const getUsers = async (req,res) => {
    //res.send('obtener un solo usuario');
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM usuario WHERE id = $1", [id]);
    
        if (result.rows.length === 0)
          return res.status(404).json({ message: "Usuario no encontrado" });
    
        res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
}

const createUsers= async (req,res,next) => {
    //const user= req.body;
    //console.log(user);
   // res.send('crear usuarios');
    try {
        const { nombre, apellido } = req.body;
        const newUser = await pool.query(
            "INSERT INTO usuario (nombre, apellido) VALUES($1, $2) RETURNING *",   [nombre, apellido,]
        );
        res.json(newUser.rows[0]);
    } catch (error) {
        next(error);
    }
}

const deleteUsers= async (req,res) => {
    //res.send('eliminando usuarios');
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
    
        if (result.rowCount === 0)
          return res.status(404).json({ message: "Usuario no encontrado" });
        return res.sendStatus(204);
      } catch (error) {
        next(error);
      }
}

const updateUsers= async (req,res) => {
    //res.send('actualizando usuarios');
    try {
        const { id } = req.params;
        const { nombre, apellido } = req.body;
    
        const result = await pool.query(
          "UPDATE usuario SET nombre = $1, apellido = $2 WHERE id = $3 RETURNING *",
          [nombre, apellido, id]
        );
    
        if (result.rows.length === 0)
          return res.status(404).json({ message: "Usuario no encontrado" });
    
        return res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
}



module.exports = {
    getAllUsers,
    getUsers,
    createUsers,
    deleteUsers,
    updateUsers
    
}
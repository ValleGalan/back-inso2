const {Router} = require('express');
const pool = require('../db');
const { 
    getAllUsers,
    getUsers,
    createUsers,
    deleteUsers,
    updateUsers,
    
} = require("../controllers/admin.controller.js") ;
/*
import { Router } from "express";
import {
    getAllUsers
} from "../controllers/admin.controllers.js";

  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
*/
const router = Router();
/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Obtiene la lista de usuarios (requiere autenticación de administrador)
 *     description: Obtiene la lista de todos los usuarios registrados. Esta ruta requiere autenticación de administrador.
 *     responses:
 *       200:
 *         description: Lista de usuarios exitosamente obtenida.
 *       401:
 *         description: No autorizado. El usuario no tiene permisos de administrador.
 *       500:
 *         description: Error interno del servidor.
 */

router.get('/admin', getAllUsers);

router.get('/admin', getAllUsers)

router.get('/admin/:id', getUsers)

router.post('/admin', createUsers)

router.delete('/admin/:id',deleteUsers )

router.put('/admin/:id', updateUsers)


// create a task
/*
 
 export default router;
*/
module.exports = router;

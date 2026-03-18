// Importando o Express
import express from 'express';
// Carregar o express.Router()
const userRoutes = express.Router();
// Importando o Controller de usuários
import userController from '../controllers/userController.js';

// Endpoint para Cadastar um usuário
userRoutes.post("/user", userController.createUser)

export default userRoutes;
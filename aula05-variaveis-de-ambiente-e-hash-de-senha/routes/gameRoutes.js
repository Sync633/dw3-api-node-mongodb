import express from 'express';
import gameController from '../controllers/gameController.js';
const gameRoutes = express.Router()
// Importando o Middleware de autenticação
import Auth from '../middlewares/auth.js';

// Nesta camada são armazenados os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", Auth.Authorization, gameController.getAllGames);

// Endpoint para cadastrar um           
gameRoutes.post("/games", Auth.Authorization, gameController.createGame)

// Endpoint para excluir um game
gameRoutes.delete("/games/:id", Auth.Authorization, gameController.deleteGame)

// Endpoint para alterar um game
gameRoutes.put("/games/:id", Auth.Authorization, gameController.updateGame)

// Endpoint para lista um único jogo
gameRoutes.get("/games/:id", Auth.Authorization, gameController.getOneGame)

export default gameRoutes;
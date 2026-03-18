import express from 'express';
import gameController from '../controllers/gameController.js';

const gameRoutes = express.Router()

// Nesta camada são armazenados os ENDPOINTS (URLs) da API

// Endpoint para listar todos os games
gameRoutes.get("/games", gameController.getAllGames);

// Endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

// Endpoint para excluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

// Endpoint para alterar um game
gameRoutes.put("/games/:id", gameController.updateGame)

// Endpoint para lista um único jogo
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;
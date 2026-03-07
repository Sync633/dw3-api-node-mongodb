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

export default gameRoutes;
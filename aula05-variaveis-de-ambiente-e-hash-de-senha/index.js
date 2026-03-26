import express from "express";
// Importando o Mongoose
import mongoose from "mongoose";
// Importndo o Model de Games
import Game from "./models/Games.js";
// Importando o Model de Usuários
import User from "./models/Users.js";

// Importando as Rotas de Games
import gameRoutes from "./routes/gameRoutes.js";
// importando as Rotas de Usuários
import userRoutes from "./routes/userRoutes.js";

// Importando o CORS
import cors from 'cors';


const app = express();

// Configurando o Express
app.use(express.json()) // Permite o uso de JSON na aplicação

// Configurando o CORS
app.use(cors())

app.use('/', gameRoutes)
app.use('/', userRoutes)

// Inciando a conexão com o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games-novo")

// Rota Principal (EXEMPLO)
// app.get("/", (req, res) => {
//     const games = [
//         {
//             title: "Overwatch",
//             year: "2022",
//             plataform: "PC",
//             price : 0
//         },
//         {
//             title: "Titanfall 2",
//             year: "2016",
//             plataform: "PC",
//             price: 30
//         }
//     ]
//     res.status(200).json(games)
// });

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`API Rodando em http://localhost:${port}`);
    }
})
import express from "express";
import mongoose from "mongoose";
import Game from "./models/Games.js";
import gameRoutes from "./routes/gameRoutes.js";

const app = express();

// Configurando o Express
app.use(express.json()) // Permite o uso de JSON na aplicação
app.use('/', gameRoutes)

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
import mongoose from "mongoose";

// O campo "descriptions" será um documento alinhado
const descriptionSchema = new mongoose.Schema({
    genre: String, // Gênero
    plataform: String, // Plataforma
    rating: String, // Classificação de Idade
})

const gameSchema = new mongoose.Schema({
    title: String,
    year: Number,
    price: Number,
    descriptions : descriptionSchema

    // Definindo o Campo como Array
    // descriptions: [descriptionSchema]
});

const Game = mongoose.model('Game', gameSchema);

export default Game;
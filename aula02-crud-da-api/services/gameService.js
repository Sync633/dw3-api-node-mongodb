// Importando o Model
import Game from "../models/Games.js";

class GameService {
    // Service para buscar todos os registros de "Games" do banco de dados
    // Função Assncrona (Funciona Sem Bloquear o Sistema Por Espera)
    async getAll() {
        try {
            // Busca todos os registros (Mongoose)
            const games = await Game.find()
            return games
        } catch (error) {
            console.log(error)
        }
    }

    //Método para cadastrar um Game
    async Create(title, plataform, year, price){
        try {
            const newGame = new Game({
                // Técnica: Desestruturação - {title : title} = {title}
                title,
                plataform,
                year,
                price
            })
            // Gravando no banco
            await newGame.save()
        } catch (error) {
            console.log(error)
        }
    }
}

// Exportando a classe (service)
export default new GameService()
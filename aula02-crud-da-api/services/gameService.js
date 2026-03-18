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

    // Método para excluir um Jogo
    async Delete(id){
        try {
            // Excluindo o Jogo pela ID
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id: ${id} foi deletado do sistema.`)
        } catch (error) {
            console.log(error)
        }
    }

    // Método para alterar um jogo
    async Update(id, title, plataform, year, price) {
        try {
            const UpdatedGame = await Game.findByIdAndUpdate(id, {
                title,
                plataform,
                year,
                price
            },
            { new : true }
        )
            console.log(`Game com a id: ${id} foi alterado.`)
            return UpdatedGame
        } catch (error) {
            console.log(error)
        }
    }

    // Método para buscar um único jogo
    async getOne(id) {
        try{
            const game = await Game.findOne({ _id: id})
            return game
        } catch (error) {
            console.log(error)
        }
    }
}

// Exportando a classe (service)
export default new GameService()
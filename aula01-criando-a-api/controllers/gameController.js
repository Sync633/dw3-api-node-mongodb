import gameService from "../services/gameService.js";

// Função para tratamento da requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        // Cod. 200 (OK) : Requisição feita com sucesso
        res.status(200).json({games : games});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Erro Interno do Servidor.'})
    }
}

export default { getAllGames }
import gameService from "../services/gameService.js";

// Função para tratamento da requisição de LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        // Cod. 200 (OK) : Requisição feita com sucesso
        res.status(200).json({games : games});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : 'Erro Interno do Servidor. Não foi possível listar os jogos.'})
    }
}

// Função para tratar a requisição de cadastrar um jogo
const createGame = async (req, res) => {
    try {
        // Desestruturação - const title = req.body.title  =  const {title...} = req.body
        // Coletando os dados da requisição
        const {title, plataform, year, price} = req.body
        // Passando os dados para o Service
        await gameService.Create(title, plataform, year, price)
        // Enviar apenas um Status = res.sendStatus(201)
        res.status(201).json({message: "O jogo foi cadastrado com sucesso!"}) // Cod. 201 - CREATED - Um novo recurso foi criado.

    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Erro Interno do Servidor. Não foi possível cadastrar o jogo.'})
    }
}

export default { getAllGames, createGame }
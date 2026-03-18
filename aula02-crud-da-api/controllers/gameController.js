import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

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

// Função para deletar um jogo
const deleteGame = async (req, res) => {
    try{
        // Coletando a ID
        const id = req.params.id
        // Validação da ID
        if(ObjectId.isValid(id)){
            await gameService.Delete(id)
            res.status(204).json({message: 'O jogo foi excluido com sucesso!'})
        } else {
            res.status(400).json({error: 'Ocorreu um erro na validação da ID.'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Erro Interno do Servidor. Não foi possível deletar o jogo.'})
    }
}

// Função para atualizar um jogo
const updateGame = async (req, res) => {
    try{
        // Coletando a ID
        const id = req.params.id
        // Validação da ID
        if(ObjectId.isValid(id)){
            const {title, plataform, year, price} = req.body
            const game = await gameService.Update(id, title, plataform, year, price)
            res.status(200).json({message: 'O jogo foi atualizado com sucesso!', game : game})
        } else {
            res.status(400).json({error: 'Ocorreu um erro na validação da ID.'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Erro Interno do Servidor. Não foi possível atualizar o jogo.'})
    }
}


// Função para buscar um único jogo
const getOneGame = async (req, res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)){
            const game = await gameService.getOne(id)
            // Verificando se o jogo foi encontrado
            if(!game) {
                res.status(404).json({erro: 'O jogo buscado não foi encontrado.'}) // 404 = Not Found
            } else {
                res.status(200).json({message: 'O jogo foi encontrado com sucesso!', game }) // 200 OK
            }
        } else {
            res.status(400).json({error: 'A ID informada é inválida'}) // 400 = Bad Request
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error : 'Erro interno do Servidor. Não foi possível encontrar o jogo'}) // 500 = Internal Server Error
    }
}

export default { getAllGames, createGame, deleteGame, updateGame, getOneGame }
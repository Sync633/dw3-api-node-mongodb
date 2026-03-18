// Importando o Service
import userService from "../services/userService.js";

const createUser = async(req, res) => {
    try {
        // Coletando os dados
        const { name, email, password } = req.body;
        // Enviando para cadastrar
        await userService.Create(name, email, password);
        // Retornando uma resposta
        res.status(201).json({ message: "Usuário cadatrado com sucesso! "})
        // Cod. 201 (CREATED)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro Interno do Servidor. Não foi possível cadastrar o usuário"})
    }
}

export default { createUser }
// Importando o Service
import userService from "../services/userService.js";
// Importando o JsonWebToken (JWT)
import jwt from 'jsonwebtoken';

// Importando o bcrypt
import bcrypt from 'bcrypt';

// Importando as variáveis de ambiente (dotenv)
import dotenv from 'dotenv';
// Configurando o dotenv
dotenv.config();

// // Segredo para gerar o token da API (JWT)
// const JWTSecret = 'thegames-secret';

// Acessando a variável armazenado no .env
const JWTSecret = process.env.JWTSECRET

// Função para CADASTRAR um usuário
const createUser = async (req, res) => {
    try {
        // Coletando os dados
        const { name, email, password } = req.body;

        // Gerando o HASH de senha
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        // Enviando para cadastrar
        await userService.Create(name, email, hash);
        // Retornando uma resposta
        res.status(201).json({ message: "Usuário cadatrado com sucesso! "})
        // Cod. 201 (CREATED)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro Interno do Servidor. Não foi possível cadastrar o usuário"})
    }
}


// Função para AUTENTICAR um usuário (Função de Login)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se o e-mail existe
        if (email != undefined) {
            // Buscando o usuário no banco
            const user = await userService.getOne(email)
            // Se o usuário for encontrado
            if (user != undefined) {

                // Verificando o HASH DE SENHA
                const correct = bcrypt.compareSync(password, user.password)
                // Verificando se o HASH foi validado
                if (correct) {
                    // Criar um JWT (Token)
                    jwt.sign({ id: user._id, email: user.email }, JWTSecret, { expiresIn: '48h'}, (error, token) => {
                        // Falha
                        if (error) {
                            res.status(400).json({ error: "Não foi possível gerar o token." })
                        // Sucesso
                        } else {
                            res.status(200).json({ message: "Login Realizado com Sucesso!", token: token })
                        }
                    })
                // Senha Incorreta
                } else {
                    res.status(401).json({ error: "Acesso Negado. Suas credenciais são inválidas."})
                    // Cod. 401 (UNAUTHORIZED) - Não Autorizado
                }
            // Usuário não encontrado
            } else {
                res.status(404).json({ error: "O usuário informado não foi encontrado."})
            }
        // Email inválido ou vazio
        } else {
            res.status(404).json({ error: "E-mail inválido ou não informado."})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro Interno do Servidor. Não foi possível realizar o login"})
    }
}

export default { createUser, loginUser, JWTSecret }
// Middleware de Autenticação

import jwt from 'jsonwebtoken'
import userController from '../controllers/userController.js'

// Função para verificar a autenticação do usuário
// Verificar se ele possui um token válido
const Authorization = (req, res, next) => {
    // Capturar o token do usuário atravéz do cabeçalho da requisição
    const authToken = req.headers['authorization']
    // Verificando se o token existe
    if (authToken != undefined) {
        const bearerToken = authToken.slipt(' ')
        const token = bearerToken[1]
        // Verificando se o token é valido
        jwt.verify(token, userController.JWTSecret, (error, data) => {
            if (error) {
                // Cod (401): Não autorizado - Unauthorized
                res.status(401).json({ error: "Acesso não autorizado. Token inválido."})
            } else {
                req.token = token
                req.loggedUser = {
                    id: data.id,
                    email: data.email
                }
                // Prosseguindo com a Requisição
                next()
            }
        })
    // Caso o Token não exista
    } else {
        res.status(401).json( { error: "Acesso não autorizado, você não está autenticado"})
    }
}

export default { Authorization }
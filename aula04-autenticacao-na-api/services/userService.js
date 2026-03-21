// Importando o Model de Usuários
import User from "../models/Users.js";

class userService {
    // Método para cadastrar um usuário
    async Create(name, email, password) {
        try {
            const newUser = new User({
                name,
                email,
                password
            });
            // .save() -> Utilizado para gravar um registro no BD
            await newUser.save();
        } catch(error) {
            console.log(error);
        }
    }

    // Método para buscar um usuário
    async getOne(email) {
        try {
            // O método findOne() busca um registro no Banco de Dados (função mongoose)
            const user = await User.findOne({ email: email });
            return user;
        } catch (error) {
            console.log(error);
        }
    }
}
export default new userService();
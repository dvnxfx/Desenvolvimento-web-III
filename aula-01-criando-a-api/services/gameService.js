//Importando o Model 
import Game from "../models/Games.js"

class gameService {
    // Método para buscar todos os registros no banco
    // funções asíncronas são não bloqueantes
    async getAll() {
        // try trata o sucesso 
        try {
            // .find() -> é o método para buscar registros no banco
            const games = await Game.find()
            return games

            // catch trata a falha
        } catch(error) {
             console.log(error)
        }
    }
}
// exportando a classe
export default new gameService()
import express  from "express"
import db from './config/dbConnectt.js'
import routes from './routes/index.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('A conexão com o banco foi feita com sucesso!')
})

const app = express()
app.use(express.json())
routes(app)

export default app
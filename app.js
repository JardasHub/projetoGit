import express from 'express'
import 'dotenv/config'
import { router } from './rotas/usuario.js'
import { routerTarefa } from './rotas/tarefas.js'
import { database } from './database.js'
import cors from "cors"


const app = express()

app.use(express.json())
app.use(router)
app.use(routerTarefa)
app.use(cors({origin: 'http://localhost:3000'}))

//await database.sync({alter: true})

app.listen(3000, () => console.log('servidor rodando'))
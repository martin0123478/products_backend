import express from "express";
import colors from 'colors'
import router from "./router.js";
import cors, { CorsOptions } from 'cors'
import db from "./config/db.js";
//conectar a bd
async function connctDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.magenta('conexion exitosa'))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed('hubo un error a la base de datos'))
    }

}
connctDB()
const server = express()
//cors
const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin === process.env.FRONTEND_URL) {
            callback(null, true)
        } else {
            callback(new Error('ERROR DE CORS'))
        }
    }
}
server.use(cors(corsOptions))
server.use(express.json())
server.use('/api/products', router)

export default server
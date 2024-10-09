import express from "express";
import colors from 'colors'
import router from "./router.js";
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
server.use(express.json())
server.use('/api/products', router)

export default server
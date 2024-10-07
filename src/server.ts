import express from "express";
import router from "./router";
import db from "./config/db";
import colors from 'colors'
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
server.use('/api/products', router)

export default server
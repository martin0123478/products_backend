import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import Product from "../models/Product.model.js";
dotenv.config()
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const db = new Sequelize(process.env.DATABASE_URL!, {
    models: [__dirname + '/../models/**/*']
})
db.addModels([Product]);
export default db
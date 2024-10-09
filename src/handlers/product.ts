import { Request, Response } from 'express'
import Product from '../models/Product.model.js'
import { validationResult } from 'express-validator'
export const createProduct = async (req: Request, res: Response) => {
    let erros = validationResult(req)
    if (!erros.isEmpty()) {
        return res.status(400).json({ erros: erros.array() })
    }
    const product = await Product.create(req.body)

    res.json({ data: product })
}


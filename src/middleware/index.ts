import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export const handleInputErrors = (req: Request, res: Response, next: NextFunction): void | Promise<void> => {
    let erros = validationResult(req)
    if (!erros.isEmpty()) {
        res.status(400).json({ erros: erros.array() })
        return

    }
    next()
}
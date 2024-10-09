import { Router } from "express";
import { createProduct, getProducts } from "./handlers/product.js";
import { body } from 'express-validator'
import { handleInpitErrors } from "./middleware/index.js";
const router = Router()

router.get('/', getProducts)

router.post('/',
    //validacion
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),

    body('price')
        .isNumeric().withMessage('valor no valido')
        .notEmpty().withMessage('El costo del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('precio no valido'),
    handleInpitErrors,
    createProduct)

router.put('/', (req, res) => {
    res.json('desde put')
})

router.patch('/', (req, res) => {
    res.json('desde patch')
})

router.delete('/', (req, res) => {
    res.json('desde delete')
})

export default router
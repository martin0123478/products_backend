import { Router } from "express";
import { createProduct } from "./handlers/product.js";
import { body } from 'express-validator'
const router = Router()

router.get('/', (req, res) => {
    res.json('desde get')
})

router.post('/',
    //validacion
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),

    body('price')
        .isNumeric().withMessage('valor no valido')
        .notEmpty().withMessage('El costo del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('precio no valido'),
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
import { Router } from "express";
import { createProduct, getProductById, getProducts, updateAvailability, updateProduct } from "./handlers/product.js";
import { body, param } from 'express-validator'
import { handleInpitErrors } from "./middleware/index.js";
const router = Router()

router.get('/', getProducts)
router.get('/:id',
    param('id').isInt().withMessage('no es numero'),
    handleInpitErrors,
    getProductById)

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

router.put('/:id',
    //validacion
    body('name')
        .notEmpty().withMessage('El nombre del producto no puede ir vacio'),

    body('price')
        .isNumeric().withMessage('valor no valido')
        .notEmpty().withMessage('El costo del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('precio no valido'),

    body('availability').isBoolean().withMessage('valor para disponibilidad no valido'),
    handleInpitErrors,

    updateProduct)

router.patch('/:id', updateAvailability)

router.delete('/', (req, res) => {
    res.json('desde delete')
})

export default router
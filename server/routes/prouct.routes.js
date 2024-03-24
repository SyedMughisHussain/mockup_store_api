import express from 'express';
import { getProducts, createProduct, getProduct } from "../controllers/product.controller.js"

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct);
router.route('/').post(createProduct);

export default router


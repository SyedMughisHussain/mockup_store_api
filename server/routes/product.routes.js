import express from 'express';
import { getProducts, createProduct, getProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js"

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProduct);
router.route('/:id').delete(deleteProduct);
router.route('/:id').patch(updateProduct);
router.route('/').post(createProduct);

export default router


import express from 'express';

import { getCategories, getCategory } from '../controllers/categories.controller.js';

const router = express.Router();

router.route('/').get(getCategories);
router.route('/:id').get(getCategory);

export default router;
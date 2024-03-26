import express from 'express';

import { getUsers, createUser } from '../controllers/user.controller.js';

const router = express.Router();

router.route('/').get(getUsers);
router.route('/').post(createUser)

export default router;


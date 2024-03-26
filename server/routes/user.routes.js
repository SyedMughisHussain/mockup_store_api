import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUser);
router.route("/:id").delete(deleteUser);
router.route("/:id").patch(updateUser);

export default router;

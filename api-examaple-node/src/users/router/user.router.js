import express from "express";
import { ErrorHanling } from "../../middlewares/ErrorHandling.js";
import {
  createUser,
  deleteUser,
  getAllUsers,
} from "../controller/user.controller.js";
import { getUserById, updateUser } from "../controller/user.controller.js";
import { validateUserCreate } from "../validators/createUser.validator.js";
const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", validateUserCreate, createUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

export default userRouter;

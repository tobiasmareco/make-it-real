import express from "express";
import taskRouter from "../tasks/tasks.routes.js";
import userRouter from '../users/router/user.router.js'
export const router = express.Router();

router.use("/api/tasks", taskRouter);
router.use("/api/users", userRouter);



import express from "express";
import projectsRouter from "../projects/router/projects.routes.js";
import taskRouter from "../tasks/tasks.routes.js";
import userRouter from "../users/router/user.router.js";
export const router = express.Router();

router.use("/api/tasks", taskRouter);
router.use("/api/users", userRouter);
router.use("/api/projects", projectsRouter);

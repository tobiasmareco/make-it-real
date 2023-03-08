import express from "express";
import taskRouter from "../tasks/tasks.routes.js";
export const router = express.Router();

router.use("/api/tasks", taskRouter);
router.use("/api/users", taskRouter);



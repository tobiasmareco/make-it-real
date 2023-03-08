import express from "express";
import {
  getTasksById,
  createTasks,
  deleteTasks,
  updateTasks,
  getAllTasks,
} from "./controllers/tasks.controllers.js";
import {
  createTaskValidator,
  deleteTaskValidator,
  updateTaskValidator,
} from "./validators/tasks.validator.js";
const taskRouter = express.Router();

taskRouter.get("/", getAllTasks);
taskRouter.get("/:id", getTasksById);
taskRouter.post("/", createTaskValidator, createTasks);
taskRouter.delete("/:id", deleteTaskValidator, deleteTasks);
taskRouter.put("/:id", updateTaskValidator, updateTasks);

export default taskRouter;

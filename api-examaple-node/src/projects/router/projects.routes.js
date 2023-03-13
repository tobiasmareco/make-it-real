import express from "express";
import {
  createProjects,
  deleteProjects,
  getAllProjects,
  getProjectsById,
  updateProjects,
} from "../controllers/projects.controller.js";
const projectsRouter = express.Router();

projectsRouter.get("/", getAllProjects);
projectsRouter.get("/:id", getProjectsById);
projectsRouter.post("/", createProjects);
projectsRouter.delete("/:id", deleteProjects);
projectsRouter.put("/:id", updateProjects);

export default projectsRouter;

import express from 'express'
import { createTasks, deleteTasks, getAllTasks, getTasksById, updateTasks } from '../controllers/tasks.controllers.js'
export const router = express.Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id',getTasksById);
router.post('/tasks',createTasks);
router.delete('/tasks/:id',deleteTasks);
router.put('/tasks/:id',updateTasks);


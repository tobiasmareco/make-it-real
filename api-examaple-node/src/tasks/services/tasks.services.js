import {
  createTask,
  getTaskId,
  getAllTasks,
  deleteTask,
} from "../repository/tasks.repository.js";

export async function serviceCreateTask(task) {
  try {
    const taskToCreate = await createTask(task);
    return { message: "Task Create", result: taskToCreate };
  } catch (error) {
    throw new Error(error);
  }
}

export async function serviceGetAllTasks() {
  try {
    const allTasks = await getAllTasks();
    return { message: "Show all tasks", result: allTasks };
  } catch (error) {
    throw new Error(error);
  }
}

export async function serviceGetTaskId(id) {
  try {
    const taskIdValue = await getTaskId(id);
    return { message: "Task by Id", result: taskIdValue };
  } catch (error) {
    throw new Error(error);
  }
}

export async function serviceDeleteTask(id) {
  const { deleted } = await deleteTask(id);
  return { message: "Deleted Task", result: deleted };
}

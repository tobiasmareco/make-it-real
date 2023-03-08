import Tasks from "../models/tasks.models.js";
import {
  serviceCreateTask,
  serviceGetAllTasks,
  serviceGetTaskId,
} from "../services/tasks.services.js";

export async function getAllTasks(req, res) {
  try {
    const { message, result } = await serviceGetAllTasks();
    res.status(200).json({message, result});
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
}

export async function getTasksById(req, res) {
  const { id } = req.params;
  try {
    const { message, result } = await serviceGetTaskId(id);
    res.status(200).json({ message, result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createTasks(req, res) {
  const { title, description, status } = req.body;
  const task = {
    title,
    description,
    status: status ? status : false,
  };
  try {
    const { result, message } = await serviceCreateTask(task);
    res.status(201).json({ message, result });
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteTasks(req, res) {
  try {
    const deleteUserId = await Tasks.findByIdAndDelete(id);
    if (!deleteUserId) {
      res.status(404).json({ message: "task id not found" });
      return;
    }
    res.status(200).json({ message: "deleted task succesfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
}

export async function updateTasks(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "invalid id value" });
    return;
  }
  const {
    title: newTitle,
    description: newDescription,
    status: newStatus,
  } = req.body;
  try {
    const userIdExist = await Tasks.findById({ _id: id }).exec();
    if (!userIdExist) {
      res.status(404).json({ message: "not task id found" });
      return;
    }
    await Tasks.findByIdAndUpdate(id, {
      title: newTitle && newTitle,
      description: newDescription && newDescription,
      status: newStatus && newStatus,
    });
    res.status(200).json({ message: "update succesfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
}

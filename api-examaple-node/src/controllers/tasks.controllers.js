import Tasks from "../models/index.models.js";

export function getAllTasks(req, res) {
  res.status(200).json({ "All tasks is this": "otbiasmareoc" });
}

export function getTasksById(req, res) {}

export async function createTasks(req, res) {
  const { title, description ,status } = req.body;
  if (!title || !description) {
    res.status(404).json({ message: "not valid task format" });
    return;
  }
  const task = {
    title,
    description,
    status
  };
  try {
    const ans = await Tasks.create(task);
    res.status(201).json({ message: "task crated successfully", ans });
  } catch (error) {
    console.log(error);
    res.status(500).json({message:'error'})
  }

}

export function deleteTasks(req, res) {}

export function updateTasks(req, res) {}

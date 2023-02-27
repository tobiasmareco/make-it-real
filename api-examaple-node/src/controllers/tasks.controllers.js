import Tasks from "../models/index.models.js";

export async function getAllTasks(req, res) {
  try {
    const allTasks = await Tasks.find({});
    if (!allTasks.length) {
      res.status(404).json({ message: "not tasks created" });
      return;
    }
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
    return;
  }
}

export async function getTasksById(req, res) {
  const { id } = req.params;
  try {
    const taskId = await Tasks.findById(id).exec();
    if (!taskId) {
      res.status(404).json({ message: `not users with id ${id}` });
      return;
    }
    res.status(200).json(taskId);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export async function createTasks(req, res) {
  const { title, description, status } = req.body;
  if (!title || !description) {
    res.status(404).json({ message: "not valid task format" });
    return;
  }
  const task = {
    title,
    description,
    status,
  };
  try {
    const ans = await Tasks.create(task);
    res.status(201).json({ message: "task crated successfully", ans });
  } catch (error) {
    res.status(404).json({ message: "error" });
  }
}

export async function deleteTasks(req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(404).json({ message: "not user exist" });
    return;
  }
  try {
    const deleteUserId = await Tasks.findByIdAndDelete(id);
    if (!deleteUserId) {
      res.status(404).json({ message: "user id not found" });
      return;
    }
    res.status(200).json({ message: "deleted user succesfully" });
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
      res.status(404).json({ message: "not user id found" });
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

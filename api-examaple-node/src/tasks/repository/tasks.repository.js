import Task from "../models/tasks.models.js";
export const createTask = async (task) => {
  try {
    return await Task.create(task);
  } catch (error) {
    return error;
  }
};

export const getAllTasks = async () => {
  try {
    return await Task.find({});
  } catch (error) {
    throw new Error(error);
  }
};

export const getTaskId = async (id) => {
  try {
    const taskId = await Task.findOne({ _id: id });
    return taskId;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const delTaskId = await Task.deleteOne({ _id: id });
    console.log(delTaskId);
  } catch (error) {}
};

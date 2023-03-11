import User from "../models/User.model.js";

export const createUser = async (user) => {
  try {
    const create = await User.create(user);
    console.log(create);
    return create;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    return await User.find({});
  } catch (error) {
    return error;
  }
};

export const getUserById = async (id) => {
  try {
    const userId = await User.findById(id);
    return userId;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    comsole.log({ "delete funct": result });
    return result;
  } catch (error) {
    return error;
  }
};

export const updateUser = async (id, newData) => {
  try {
    const result = await User.findByIdAndUpdate(id, newData);
    return result;
  } catch (error) {
    return error;
  }
};

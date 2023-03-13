import User from "../models/User.model.js";

export const repocreateUser = async (user) => {
  try {
    const create = await User.create(user);
    return create;
  } catch (error) {
    return error;
  }
};

export const repogetAllUsers = async () => {
  try {
    const result = await User.find({});
    return result;
  } catch (error) {
    return error;
  }
};

export const repogetUserById = async (id) => {
  try {
    const userId = await User.findById(id);
    console.log({rep:userId})
    return userId;
  } catch (error) {
    return error;
  }
};

export const repodeleteUser = async (id) => {
  try {
    const result = await User.findByIdAndDelete(id);
    comsole.log({ "delete funct": result });
    return result;
  } catch (error) {
    return error;
  }
};

export const repoupdateUser = async (id, newData) => {
  try {
    const result = await User.findByIdAndUpdate(id, newData);
    return result;
  } catch (error) {
    return error;
  }
};

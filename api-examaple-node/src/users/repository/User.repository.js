import { createToken } from "../../global/Token.js";
import User from "../models/User.model.js";

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
    const result = await User.findById(id);
    return { result };
  } catch (error) {
    return { error };
  }
};

export const repocreateUser = async (user) => {
  try {
    const createUser = {
      ...user,
      token: createToken(user.email, process.env.API_JWT_KEY),
    };
    const result = await User.create(createUser);
    return { result };
  } catch (error) {
    return { error };
  }
};

export const repodeleteUser = async (id) => {
  try {
    const userDelete = await User.findById(id);
    if (!userDelete) {
      return { result: userDelete };
    }
    const result = await User.findByIdAndDelete(id);
    return { result };
  } catch (error) {
    return { error };
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

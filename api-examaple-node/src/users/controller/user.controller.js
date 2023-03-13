import {
  serviceCreateUser,
  serviceDeleteUser,
  serviceGetAllUser,
  serviceGetUserId,
  serviceUpdateUser,
} from "../services/User.service.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await serviceGetAllUser();
    res.status(200).json({ result });
  } catch (error) {
    next(error.message);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const result = await serviceGetUserId(req.params.id);
    console.log({cont:result})
    if (!result) {
      return next('User id not found');
    }
    res.status(200).json({ result });
  } catch (error) {
    next(error.message);
  }
};

export const createUser = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };
  try {
    const result = await serviceCreateUser(user);
    res.status(200).json({ message: "user created succesfully", result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userIdExist = await serviceGetUserId(id);
  console.log({ "user exist": userIdExist });
  if (!userIdExist) {
    res.status(400).json({ message: "user id not found" });
    return;
  }
  try {
    const result = await serviceDeleteUser(id);
    res.status(200).json({ message: "user deleted succesfully", result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const userIdExist = await serviceGetUserId(id);
  if (!userIdExist) {
    res.status(400).json({ message: "user id not found" });
    return;
  }
  const { password, name, active, admin } = req.body;
  const newUserData = {
    password: password && password,
    name: name && name,
    active: active && active,
    admin: admin && admin,
  };
  try {
    const result = await serviceUpdateUser(id, newUserData);
    res.status(200).json({ message: "", result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

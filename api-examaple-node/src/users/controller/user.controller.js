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
    res.status(200).json(result);
  } catch (error) {
    next(error.message);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    // const { result, error } = await serviceGetUserId(req.params.id);
    // if (error) {
    //   return next(error.message);
    // }
    // if (!result) {
    //   return next("User id not found");
    // }
    const result = await serviceGetUserId(req.params.id);
    res.status(200).json(result);
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
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await serviceDeleteUser(id);
    res.status(200).json(
      result._id
        ? {
            message: "user deleted succesfully",
            id: result._id,
            email: result.email,
          }
        : result
    );
  } catch (error) {
    return next(error.message);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const userIdExist = await serviceGetUserId(id);
  if (!userIdExist) {
    return next("User id not found");
  }
  const { password, name } = req.body;
  const newUserData = {
    password: password && password,
    name: name && name,
  };
  try {
    const result = await serviceUpdateUser(id, newUserData);
    res.status(200).json({ message: "user data updated" });
  } catch (error) {
    return next(error.message);
  }
};

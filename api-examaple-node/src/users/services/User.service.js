import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../repository/User.repository.js";

export async function serviceCreateUser(user) {
  try {
    const result = await createUser(user);
    comsole.log(result);
    return;
  } catch (error) {
    return error;
  }
}

export async function serviceGetAllUser() {
  try {
    return await getAllUsers();
  } catch (error) {
    return error;
  }
}

export async function serviceGetUserId(id) {
  try {
    return await getUserById(id);
  } catch (error) {
    return error;
  }
}

export async function serviceDeleteUser(id) {
  try {
    const { result, error } = await deleteUser(id);
    if (error) {
      return error;
    }
    return result;
  } catch (error) {
    return error;
  }
}

export async function serviceUpdateUser(id, newUserData) {
  try {
    const result = await updateUser(id, newUserData);
    return result;
  } catch (error) {
    return error
  }
}

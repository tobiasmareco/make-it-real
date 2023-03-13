import {
  repocreateUser,
  repogetAllUsers,
  repogetUserById,
  repodeleteUser,
  repoupdateUser,
} from "../repository/User.repository.js";

export async function serviceCreateUser(user) {
  try {
    const result = await repocreateUser(user);
    return;
  } catch (error) {
    return error;
  }
}

export async function serviceGetAllUser() {
  try {
    const result = await repogetAllUsers();
    return result;
  } catch (error) {
    return error;
  }
}

export async function serviceGetUserId(id) {
  try {
    const result = await repogetUserById(id);
    console.log({serv:result})
    return result;
  } catch (error) {
    return error;
  }
}

export async function serviceDeleteUser(id) {
  try {
    const { result, error } = await repodeleteUser(id);
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
    const result = await repoupdateUser(id, newUserData);
    return result;
  } catch (error) {
    return error;
  }
}

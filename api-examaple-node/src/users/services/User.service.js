import {
  repocreateUser,
  repogetAllUsers,
  repogetUserById,
  repodeleteUser,
  repoupdateUser,
} from "../repository/User.repository.js";

export async function serviceGetAllUser() {
  try {
    const result = await repogetAllUsers();
    if (result.length < 1) {
      return "not users found";
    }
    return result;
  } catch (error) {
    return error;
  }
}

export async function serviceGetUserId(id) {
  try {
    const { result, error } = await repogetUserById(id);
    if (error) {
      return { message: error.message };
    }
    if (!result) {
      return { message: "User id not found" };
    }

    return result;
  } catch (error) {
    return { error };
  }
}

export async function serviceCreateUser(user) {
  try {
    const { result, error } = await repocreateUser(user);
    // console.log({res:result})
    if (error) {
      return { message: "email already exists", error };
    }
    return { message: "User created succesfully", result };
  } catch (error) {
    return error;
  }
}

export async function serviceDeleteUser(id) {
  try {
    const { result, error } = await repodeleteUser(id);
    if (error) {
      return { message: error.message };
    }
    if (!result) {
      return { message: `User with id ${id} not found` };
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

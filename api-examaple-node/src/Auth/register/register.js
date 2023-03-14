import User from "../../users/models/User.model.js";
import { serviceCreateUser } from "../../users/services/User.service.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    console.log(emailExist);
    if (emailExist) {
      return next("Email already register");
    }
    const create = await serviceCreateUser({ email, password });
  } catch (error) {
    return next(error.message);
  }
};

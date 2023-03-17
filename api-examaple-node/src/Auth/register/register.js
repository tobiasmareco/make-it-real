import { registerMessage } from "../../global/EmailMessages.js";
import { Send } from "../../global/SendEmail.js";
import User from "../../users/models/User.model.js";
import { serviceCreateUser } from "../../users/services/User.service.js";

export const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const emailExist = await User.findOne({ email });
    // console.log(emailExist);
    if (emailExist) {
      return next("Email already register");
    }
    /**
     * TODO -> send data to backend for create user.
     */
    await serviceCreateUser({ email, password });
    await Send(email, "Confirm your account", registerMessage(email, ""));
    res.status(201).json({
      message:
        "please check your email inbox , and confirm your account in TaskApp",
    });
  } catch (error) {
    return next(error.message);
  }
};

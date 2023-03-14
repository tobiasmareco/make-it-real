import { createToken } from "../../global/Token.js";
import User from "../../users/models/User.model.js";
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const emaillExist = await User.findOne({ email });
    if (!emaillExist) {
      return next("Email not register, try again ");
    }
    //dehashed pass..
    const passCheck = emaillExist.password === password;
    if (!passCheck) {
      return next("Invalid user password");
    }
    return res.status(200).json({
      message: "login succesfully",
      token: createToken(emaillExist._id, process.env.JWT_SECRET_KEY),
    });
  } catch (error) {
    return next(error.message);
  }
};

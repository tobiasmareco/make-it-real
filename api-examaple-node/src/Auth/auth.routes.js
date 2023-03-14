import express from "express";
import { loginUser } from "./Login/login.js";
import { userLoginValidate } from "./Login/login.validator.js";
import { registerUser } from "./register/register.js";
import { validateRegister } from "./register/register.validation.js";

const authRouter = express.Router();

authRouter.post("/login", userLoginValidate, loginUser);
authRouter.post("/register", validateRegister, registerUser);
export default authRouter;

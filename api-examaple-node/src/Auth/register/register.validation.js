import Joi from "joi";
const validate = Joi.object({
  email: Joi.string().required().email({ minDomainSegments: 2 }).messages({
    "string.email": "add a valid email",
    "any.required": "not valid email",
  }),
  password: Joi.string().required().min(6).messages({
    "string.min": "password must have more than 6 characters",
    "any.required": "please add an valid password",
  }),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Repeat password")
    .messages({ "any.only": "password do not match" }),
});

export const validateRegister = (req, res, next) => {
  const { error } = validate.validate(req.body);
  if (error) {
    return next(error.message);
  }
  next();
};

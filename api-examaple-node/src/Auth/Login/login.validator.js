import joi from "joi";

const validator = joi.object({
  email: joi
    .string()
    .required()
    .email({ minDomainSegments: 2 })
    .messages({ "any.required": "Please add a valid email" }),
  password: joi.string().required().min(6).messages({
    "string.min": "password must have more than 6 characters",
    "any.requiered": "please add a password",
  }),
});

export const userLoginValidate = (req, res, next) => {
  const { error } = validator.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "invalid user or password" });
  }
  next();
};

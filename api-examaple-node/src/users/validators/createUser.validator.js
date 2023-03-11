import joi from "joi";

const validatorCreate = joi.object({
  email: joi.string().required().email({ minDomainSegments: 2 }),
  password: joi.string().required().min(8),
});

export const validateUserCreate = (req, res, next) => {
  const { error } = validatorCreate.validate(req.body);
  if (error) {
    res.status(404).json({ message: error.message });
    return;
  }
  next();
};

// const validatorUpdate = joi.object({
//   id: joi.required(),
//   password: joi.string().required().min(8),
// });

// export const validateUserUpdate = (req, res, next) => {
//   const { id } = req.params;
//   console.log(id)
//   if (!id) {
//     res.status(404).json({ message: "not valid id" });
//     return;
//   }
//   const { error } = validatorUpdate.validate(req.body.password);
//   if (error) {
//     res.status(404).json({ message: error.message });
//     return;
//   }
//   next();
// };

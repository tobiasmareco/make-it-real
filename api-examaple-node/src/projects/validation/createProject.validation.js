import joi from "joi";
const validate = joi.object({
  title: joi.string().required().min(4).messages({
    "any.required": "please add a title",
    "string.min": "title must have more than 4 characters",
  }),
});

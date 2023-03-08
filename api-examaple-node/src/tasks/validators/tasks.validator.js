import joi from "joi";
const schemaCreate = joi.object({
  title: joi.string().min(10).max(40).required(),
  description: joi.string().min(10).required(),
  status: joi.boolean(),
});
export function createTaskValidator(req, res, next) {
  const { error } = schemaCreate.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.message });
    return;
  }
  next();
}

const schemeUpdate = joi.object({
  title: joi.string().min(10).max(30).required(),
  description: joi.string().min(10).required(),
});
export function updateTaskValidator(req, res, next) { 
  const { error } = schemeUpdate.validate(req.body);
  if (error) {
    res.status(404).json({ message: error.message });
    return;
  }
  next();
}

const schemeDelete = joi.object({
  id: joi.required(),
});
export function deleteTaskValidator(req, res, next) {
  const { error } = schemeDelete.validate(req.params);
  if (error) {
    res.status(404).json({ message: error.message });
    return;
  }
  next();
}

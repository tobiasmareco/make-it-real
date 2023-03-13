export function ErrorHanling(errorMessage, req, res, next) {
  return res.status(400).json({ message: errorMessage });
}

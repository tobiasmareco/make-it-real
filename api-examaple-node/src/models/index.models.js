import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});
export default mongoose.model("Tasks", taskSchema);

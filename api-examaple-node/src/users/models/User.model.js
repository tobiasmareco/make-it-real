import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "please add an email"],
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Users", userSchema);

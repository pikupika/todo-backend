import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  text: String,
  read: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model('Todo', todoSchema);
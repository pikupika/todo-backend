import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model('User', userSchema);
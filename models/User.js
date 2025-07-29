import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,   // to ensure no duplicate emails (including 'null' or '')
        trim: true,     // to remove leading/trailing whitespace
        lowercase: true // to converts email to lowercase for consistent storage/comparison
    },
    password: {
        type: String,
        required: true
    },
});

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model('User', userSchema);

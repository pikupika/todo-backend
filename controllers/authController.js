import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// ---- Register ----
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please enter all required fields.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  console.log("🔐 Login attempt:");
  console.log("Email:", email);
  console.log("Password:", password, "Type:", typeof password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("❌ User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("✅ User found:", user.email);
    console.log("Stored hashed password:", user.password);

    const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
    console.log("✅ Is password valid?", isPasswordValid);

    if (!isPasswordValid) {
      console.log("❌ Invalid password");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    console.log("✅ Token generated");

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("❌ Server error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

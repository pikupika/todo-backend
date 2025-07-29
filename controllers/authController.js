import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

export const register = async (req, res) => {
  try {
    console.log('Received registration request body:', req.body); 
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
    console.log("🟢 register controller hit");
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log('Login attempt:', { email, password });

    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found for email:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log('User found. Stored hashed password:', user.password);

    const valid = await bcrypt.compare(password, user.password);
    console.log('Password comparison result:', valid);

    if (!valid) {
      console.log('Invalid password for user:', email);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful for:', email);
    res.json({ token });

    console.log("🔴 login controller hit");

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

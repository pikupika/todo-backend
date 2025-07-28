import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: 'User created' });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: 'Invalid credentials'});

  const token = jwt.sign({ userId: user._id}, process.env.JWT_SECRET);
  res.json({ token });
};

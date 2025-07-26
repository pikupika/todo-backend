import User, { findOne } from '..models/User';
import { sign } from 'jsonwebtoken';
import { hash as _hash, compare } from 'bcryptjs';

export async function register(req, res) {
    const { name, email, password} = req.body;
    const hash = await _hash(password, 10);
    const user = new User ({ name, email, password: hash });
    await user.save();
    res.status(201).json({ message: 'User created'});
}

export async function login(req, res) {
    const { email, password } = req.body;
    const user = await findOne({ email });
    if (!user || (await compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials'});
    } 
    const token = sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ token });
}
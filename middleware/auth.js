import { verify } from 'jsonwebtoken';

export default (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(403).json({ error: 'No token' });

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token'});
    }
};


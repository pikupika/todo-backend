import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).send('Missing token');

  try {
    const token = authHeader.split(' ')[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = userId;
    next();
  } catch {
    res.status(403).send('Invalid token');
  }
};

export default auth;

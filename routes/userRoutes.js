const router = require('express').Router();
import { register, login } from '../controllers/userController';

router.post('/register', register);
router.post('/login', login);

export default router;


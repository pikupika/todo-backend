import express from 'express';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getTodos);
router.post('/', verifyToken, createTodo);
router.put('/:id', verifyToken, updateTodo);
router.delete('/:id', verifyToken, deleteTodo);

export default router;

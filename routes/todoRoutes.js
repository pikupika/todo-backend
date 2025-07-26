import express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodoAsRead
} from '../controllers/todoController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getTodos);
router.post('/', verifyToken, createTodo);
router.put('/:id', verifyToken, updateTodo);
router.delete('/:id', verifyToken, deleteTodo);
router.patch('/:id/read', verifyToken, markTodoAsRead);

export default router;

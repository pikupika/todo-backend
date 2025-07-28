import express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodoAsRead
} from '../controllers/todoController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getTodos);
router.post('/', authMiddleware, createTodo);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);
router.patch('/:id/read', authMiddleware, markTodoAsRead);

export default router;

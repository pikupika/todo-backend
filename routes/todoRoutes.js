import express from 'express';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  markTodoAsRead
} from '../controllers/todoController.js';
import auth from '../middleware/authMiddleware.js';


const router = express.Router();

router.get('/', auth, getTodos);
router.post('/', auth, createTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);
router.patch('/:id/read', auth, markTodoAsRead);

export default router;

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

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: "You accessed protected route" });
});

router.get('/', auth, getTodos);
router.post('/', auth, createTodo);
router.put('/:id', auth, updateTodo);
router.delete('/:id', auth, deleteTodo);
router.patch('/:id/read', auth, markTodoAsRead);

export default router;

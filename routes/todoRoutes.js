const router = require('express').Router();
import { createTodo, getTodos, updateTodo, deleteTodo, markAsRead } from '../controllers/todoControllers';
import auth from '../middleware/auth';

router.use(auth); //protects all routes
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.patch('/:id/read', markAsRead);
router.delete('/:id', deleteTodo);

export default router
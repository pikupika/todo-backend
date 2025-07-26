import Todo, { find, findByIdAndDelete, findById } from '../models/Todo';

export async function createTodo(req, res) {
    const { title, description } = req.body;
    const todo = new Todo({ title, description, userId: req.user.id });
    await todo.save();
    res.status(201).json(todo);
}

export async function getTodos(req, res) {
    const todos = await find({ userId: req.user.id });
    res.json(todos);
}

export async function deleteTodo(req, res) {
    await findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted ' });
}

export async function markAsRead(req, res) {
    const todo = await findById(req.params.id);
    todo.isRead = true;
    await todo.save();
    res.json(todo);
}
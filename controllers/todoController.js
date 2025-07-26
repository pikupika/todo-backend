import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const { text } = req.body;
  const newTodo = await Todo.create({ text, user: req.user.id });
  res.status(201).json(newTodo);
};

export const updateTodo = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

export const markTodoAsRead = async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
  res.json(updated);
};

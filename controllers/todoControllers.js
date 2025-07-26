import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      user: req.user.id
    });
    const saved = await todo.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    res.json(todo);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
};

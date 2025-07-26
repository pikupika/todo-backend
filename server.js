import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import todoRoutes from './routes/todoRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());

app.use('./api/todos', todoRoutes);
app.use('./api/users', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log('Server running on port ${PORT}'));
}).catch(err => console.error(err));
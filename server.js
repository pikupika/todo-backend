import express, { json } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();
app.use(cors());
app.use(json());

// Routes
app.use('/api/todos', require('./routes/todoRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(PORT, () => console.log('Server is running on ${PORT}'))
    })
    .catch(err => console.error(err));



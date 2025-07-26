import { Schema, model } from 'mongoose';
const todoSchema = new Schema({
    title: String,
    description: String,
    isRead: {
        type: Boolean, default: false
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
export default model('Todo', todoSchema);


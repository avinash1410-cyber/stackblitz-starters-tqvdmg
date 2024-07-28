import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subToDos: [
      {
        type: mongoose.Schema.Type.ObjectId,
        ref: 'SubTodo',
      },
      //array of subtotods
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

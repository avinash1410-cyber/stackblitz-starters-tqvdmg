import mongoose from 'mongoose';

// Define the schema for SubTodo
const subTodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
    color: {
      type: String,
      required: true,
      default: 'white',
    },
    completed: {
      type: Boolean,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    // You can add more fields as per your requirements
  },
  { timestamps: true }
);

// Export the SubTodo model
export const SubTodo = mongoose.model('SubTodo', subTodoSchema);

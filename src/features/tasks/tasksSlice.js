import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("tasks")) || [
  {
    task: "Jog around the park 3x",
    id: 1,
    done: true,
  },
  {
    task: "10 minutes meditation",
    id: 2,
    done: false,
  },
  {
    task: "Read for 1 hour",
    id: 3,
    done: false,
  },
  {
    task: "Pick up groceries",
    id: 4,
    done: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    clearCompleted: (state, action) => {
      return state.filter((task) => task.done !== true);
    },
  },
});

export const { addTask, deleteTask, updateTask, clearCompleted } =
  tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

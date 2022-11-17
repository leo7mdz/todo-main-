import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../features/tasks/tasksSlice";
import { themeReducer } from "../features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tasks: tasksReducer,
  },
});

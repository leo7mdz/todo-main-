export const tasksAll = (tasks) => {
  return tasks;
};
export const tasksActive = (tasks) => {
  const active = tasks.filter((task) => task.done === "false");
  return active;
};
export const tasksCompleted = (tasks) => {
  const completed = tasks.filter((task) => task.done === "true");
  return completed;
};

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";
import style from "./listItem.module.css";
import { updateTask } from "../features/tasks/tasksSlice";

const ListItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateTask({ ...task, done: !task.done }));
  };

  return (
    <li className={style.taskItem}>
      <span
        onClick={handleClick}
        className={`${style.spanRounded} ${task.done ? style.spanChecked : ""}`}
      >
        <img className={style.iconCheck} src="icon-check.svg" alt="check" />
      </span>
      <p className={`${style.task} ${task.done ? style.taskComplete : ""}`}>
        {task.task}
      </p>
      <img
        onClick={() => dispatch(deleteTask(task.id))}
        src="icon-cross.svg"
        alt="icon cross"
      />
    </li>
  );
};

export default ListItem;

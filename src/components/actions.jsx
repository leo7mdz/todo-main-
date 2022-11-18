import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCompleted } from "../features/tasks/tasksSlice";

import style from "./actions.module.css";

const Actions = ({ handleStatus }) => {
  const selector = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const length = selector.filter((task) => !task.done).length;
  return (
    <div className={style.stats}>
      <p>{length} Items left</p>
      <div className={style.actions}>
        <a
          onClick={() => handleStatus("all")}
          className={style.action}
          href="#"
        >
          All
        </a>
        <a
          onClick={() => handleStatus("active")}
          className={style.action}
          href="#"
        >
          Active
        </a>
        <a
          onClick={() => handleStatus("completed")}
          className={style.action}
          href="#"
        >
          Completed
        </a>
      </div>
      <a
        className={style.btnClear}
        onClick={() => dispatch(clearCompleted())}
        href="#"
      >
        Clear Completed
      </a>
    </div>
  );
};

export default Actions;

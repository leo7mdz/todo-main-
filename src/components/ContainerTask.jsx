import { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";

import style from "./containerTask.module.css";
import ListItem from "./listItem";

const ContainerTask = ({ status }) => {
  const selector = useSelector((state) => state.tasks);
  const theme = useSelector((state) => state.theme.theme);

  console.log(theme);

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(selector));
  }, [selector]);

  useLayoutEffect(() => {
    if (status === "all") {
      setTareas(selector);
    } else if (status === "active") {
      setTareas(selector.filter((task) => !task.done));
    } else if (status === "completed") {
      setTareas(selector.filter((task) => task.done));
    }
  }, [selector, status]);

  return (
    <div
      className={`${style.containerTask} ${theme === "dark" ? style.dark : ""}`}
    >
      {selector.length === 0 ? (
        <p className={style.notTask}>No tasks to do</p>
      ) : (
        <ul className={style.taskList}>
          {tareas.map((task) => (
            <ListItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContainerTask;

import React, { useState } from "react";
import ContainerTask from "./ContainerTask";
import Form from "./Form";
import Header from "./Header";

import style from "./todo.module.css";

const Todo = () => {
  const [status, setStatus] = useState("all");
  console.log(status);

  return (
    <div className={style.section}>
      <Header />
      <Form />
      <ContainerTask status={status} />

      <div className={style.actions}>
        <a onClick={() => setStatus("all")} className={style.action} href="#">
          All
        </a>
        <a
          onClick={() => setStatus("active")}
          className={style.action}
          href="#"
        >
          Active
        </a>
        <a
          onClick={() => setStatus("completed")}
          className={style.action}
          href="#"
        >
          Completed
        </a>
      </div>
    </div>
  );
};

export default Todo;

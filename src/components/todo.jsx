import React, { useState } from "react";
import { useSelector } from "react-redux";
import Actions from "./actions";
import ContainerTask from "./ContainerTask";
import Form from "./Form";
import Header from "./Header";

import style from "./todo.module.css";

const Todo = () => {
  const [status, setStatus] = useState("all");

  console.log(status);

  const handleStatus = (status) => {
    setStatus(status);
  };

  return (
    <div className={style.section}>
      <Header />
      <Form />
      <ContainerTask status={status} />
      <Actions handleStatus={handleStatus} />
    </div>
  );
};

export default Todo;

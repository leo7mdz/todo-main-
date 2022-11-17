import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./form.module.css";
import { addTask } from "../features/tasks/tasksSlice";
import uuid from "react-uuid";

const Form = () => {
  const dispatch = useDispatch();
  const initialState = {
    task: "",
  };
  const [inputValue, setInputValue] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value, id: uuid(), done: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
    setInputValue(initialState);
  };
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <span className={style.spanCircle}></span>
      <input
        name="task"
        onChange={handleChange}
        type="text"
        value={inputValue.task}
        className={style.inputTask}
        placeholder="Create a new todo..."
      />
      <button type="submit" className={style.buttonTask}>
        +
      </button>
    </form>
  );
};

export default Form;

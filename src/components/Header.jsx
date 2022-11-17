import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import style from "./header.module.css";

const Header = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <header className={style.header}>
      <h1 className={style.todoTitle}>TODO</h1>
      <img
        onClick={() => dispatch(toggleTheme())}
        src={theme === "light" ? "icon-moon.svg" : "icon-sun.svg"}
        alt="sun"
      />
    </header>
  );
};
export default Header;

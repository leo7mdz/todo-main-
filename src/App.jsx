import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./components/todo";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`app ${theme}`}>
      <Todo />
    </div>
  );
}

export default App;

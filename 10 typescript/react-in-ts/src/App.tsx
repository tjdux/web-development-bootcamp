import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor";

interface Todo {
  id: number;
  content: string;
}

function App() {
  const [todos, setTodo] = useState<Todo[]>([]);
  const idRef = useRef(0);
  const onAddClick = (content: string) => {
    setTodo([
      ...todos,
      {
        id: idRef.current++,
        content: content,
      },
    ]);
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <Editor onAddClick={onAddClick} />
    </div>
  );
}

export default App;

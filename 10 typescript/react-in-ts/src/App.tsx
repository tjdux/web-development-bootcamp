import { useRef, useReducer, createContext, useState, useContext } from "react";
import "./App.css";
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";
import { Todo } from "./types";
import { create } from "domain";

type Action =
  | {
      type: "CREATE";
      data: { id: number; content: string };
    }
  | { type: "DELETE"; id: number };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
  }
}

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<{
  onClickAdd: (content: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);
export const useTodoDispatch = function () {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) {
    throw new Error("TodoDispatchContext 에러");
  }
  return dispatch;
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);
  const onClickAdd = (content: string) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, content: content },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor />
          {todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} />
          ))}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;

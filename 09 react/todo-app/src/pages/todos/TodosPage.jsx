import Header from "../../components/ui/Header";
import { useNavigate } from "react-router-dom";
import TodoList from "../../components/ui/todo/TodoList";
import { useState, useEffect } from "react";
import TodoFilter from "../../components/ui/todo/TodoFilter";
import TodoForm from "../../components/ui/todo/TodoForm";
import { initialTodos } from "../../utils/data";
import TodoStats from "../../components/ui/todoStats";

function TodosPage({ onSignOut }) {
  const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useState("all");
  const [showTodoForm, setShowTodoForm] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const toggleShowTodoForm = () => {
    setShowTodoForm(!showTodoForm);
  };

  const handleSignOut = function () {
    onSignOut();
    navigate("/sign-out");
  };

  const onFilterChange = function (selectedFilter) {
    setCurrentFilter(selectedFilter);
  };

  const addTodo = function (newTodo) {
    const addedTodo = {
      ...newTodo,
      id: Math.max(...todos.map((todo) => todo.id)),
    };
    return setTodos((prevTodos) => [...prevTodos, addedTodo]);
  };

  const onToggleComplete = function (todoId) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const onDeleteTodo = function (todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="bg-light">
      <Header handleSignOut={handleSignOut} />
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>할 일 목록</h2>
          <div>
            <button
              type="button"
              className="btn btn-success me-2"
              data-bs-toggle="modal"
              data-bs-target="#addTodoModal"
              onClick={toggleShowTodoForm}
            >
              <i className="fas fa-plus"></i> 할 일 추가
            </button>
            <TodoFilter
              currentFilter={currentFilter}
              onFilterChange={onFilterChange}
            />
          </div>
        </div>
        <TodoStats todos={todos} />

        <TodoList
          currentFilter={currentFilter}
          todos={todos}
          onToggleComplete={onToggleComplete}
          onDeleteTodo={onDeleteTodo}
        />
        <TodoForm
          showTodoForm={showTodoForm}
          onCloseForm={toggleShowTodoForm}
          addTodo={addTodo}
        />
      </div>
    </div>
  );
}

export default TodosPage;

import TodoCard from "../../../pages/todos/TodoCard";

function TodoList({ currentFilter, todos, onToggleComplete, onDeleteTodo }) {
  const getFilteredTodos = function (currentFilter) {
    switch (currentFilter) {
      case "completed":
        return todos.filter((todo) => todo.isCompleted);
      case "incompleted":
        return todos.filter((todo) => !todo.isCompleted);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos(currentFilter);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="col">
          <TodoCard
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDeleteTodo={onDeleteTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;

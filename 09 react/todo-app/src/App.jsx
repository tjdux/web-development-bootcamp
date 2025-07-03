import "./App.css";
import SignInPage from "./pages/auth/SignInPage";
import TodosPage from "./pages/todos/TodosPage";
import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const onSignIn = function (userData) {
    setCurrentUser(userData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
  };

  const onSignOut = function () {
    localStorage.removeItem("currentUser");
    setCurrentUser("");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/sign-in"
          element={<SignInPage onSignIn={onSignIn} currentUser={currentUser} />}
        />
        <Route path="/todos" element={<TodosPage onSignOut={onSignOut} />} />
        <Route
          path="*"
          element={<SignInPage onSignIn={onSignIn} currentUser={currentUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

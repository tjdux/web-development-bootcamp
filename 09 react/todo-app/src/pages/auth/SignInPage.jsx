import { useState, useEffect, useRef } from "react";
import { users } from "../../utils/data";
import { useNavigate } from "react-router-dom";

function SignInPage({ onSignIn, currentUser }) {
  const errorMsgRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/todos");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    errorMsgRef.current.textContent = errorMsg;
  }, [errorMsg]);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("모든 항목을 입력해주세요.");
      return;
    }

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setErrorMsg("잘못된 이메일 또는 비밀번호입니다.");
      return;
    }

    onSignIn({ email: foundUser.email });
    navigate("/todos");
  };

  const handleTestAccountClick = (email, password) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <div
        className="card p-4 shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="card-title text-center mb-4">로그인</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="email" className="form-label">
              이메일 주소
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <p
            id="errorMessage"
            className="text-danger text-center"
            ref={errorMsgRef}
          ></p>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              로그인
            </button>
          </div>
        </form>
        <div className="mt-4 pt-3 border-top">
          <h6 className="text-muted text-center mb-3">테스트 계정</h6>
          <div className="small text-muted">
            <div className="mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm w-100 mb-1"
                onClick={() =>
                  handleTestAccountClick("user1@example.com", "password123")
                }
              >
                <strong>일반 사용자:</strong> user1@example.com / password123
              </button>
            </div>
            <div className="mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm w-100 mb-1"
                onClick={() =>
                  handleTestAccountClick("admin@example.com", "adminpass")
                }
              >
                <strong>관리자:</strong> admin@example.com / adminpass
              </button>
            </div>
            <div className="mb-2">
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm w-100"
                onClick={() =>
                  handleTestAccountClick("guest@example.com", "guest")
                }
              >
                <strong>게스트:</strong> guest@example.com / guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

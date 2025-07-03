function Header({ handleSignOut }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My ToDo App
        </a>
        <div className="d-flex">
          <span className="navbar-text text-white me-3" id="userDisplay"></span>
          <button
            className="btn btn-light"
            id="logoutButton"
            onClick={handleSignOut}
          >
            로그아웃
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

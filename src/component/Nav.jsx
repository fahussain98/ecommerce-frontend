import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");

  let logout = () => {
    localStorage.clear();
    navigate("/Sign");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        MyApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {user && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add-product">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update-product">
                  Update Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
            </>
          )}
        </ul>
        <ul className="navbar-nav ml-auto">
          {user ? (
            <li className="nav-item">
              <Link className="nav-link" to="/Sign" onClick={logout}>
                Logout({JSON.parse(user).username})
              </Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/Sign">
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

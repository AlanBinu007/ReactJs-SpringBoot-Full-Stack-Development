import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";

class MenuComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="http://www.alanbinu.com" className="navbar-brand">
              alanbinu
            </a>
          </div>
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/logout"
                onClick={AuthenticationService.logout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MenuComponent;

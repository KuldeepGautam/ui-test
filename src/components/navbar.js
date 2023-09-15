import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand">UPLOAD Logo</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="mynavbar">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link">Pages</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Feature</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Servies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

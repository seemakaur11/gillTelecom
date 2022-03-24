import React from "react";

function Navbar() {
  return (
    <section>
      <nav
        className="navbar navbar-expand-lg fixed-top navbar-light bg-light "
        style={{ color: "blue" }}
      >
        <div className="container">
          <a className="navbar-brand logo" href="/"></a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <sapn className="navbar-toggler-icon"></sapn>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Clients">
                  Clients
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#Contact Us">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;

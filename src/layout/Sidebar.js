import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ data }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleFun = (state, setState) => {
    setState(!state);
  };
  return (
    <>
      <nav className={sidebar ? "sidebar close" : "sidebar"}>
        <header>
          <div className="image-text">
            <span className="image">
              {/* <!--<img src="logo.png" alt="">--> */}
              LOGO
            </span>

            {/* <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div> */}
          </div>

          <i
            className="bx bx-chevron-right toggle"
            onClick={() => toggleFun(sidebar, setSidebar)}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a>
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </a>
              </li>

              <li className="nav-link">
                <NavLink to="/register">
                  <i className="bx bx-bar-chart-alt-2 icon"></i>
                  <span className="text nav-text">Register form</span>
                </NavLink>
              </li>

              <li className="nav-link">
                <NavLink to="/user">
                  <i className="bx bx-bell icon"></i>
                  <span className="text nav-text">User form</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a>
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section className="home">
        <div className="sidebar_body">{data}</div>
      </section>
    </>
  );
};

export default Sidebar;

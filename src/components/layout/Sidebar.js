import React, { useState } from "react";

const Sidebar = ({ content }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleFun = (state, setState) => {
    setState(!state);
  };
  const removeFun = (boolean, setState) => {
    setState(boolean);
  };
  return (
    <>
      <nav class={sidebar ? "sidebar close" : "sidebar"}>
        <header>
          <div class="image-text">
            <span class="image">
              {/* <!--<img src="logo.png" alt="">--> */}
              LOGO
            </span>

            {/* <div class="text logo-text">
              <span class="name">Codinglab</span>
              <span class="profession">Web developer</span>
            </div> */}
          </div>

          <i
            class="bx bx-chevron-right toggle"
            onClick={() => toggleFun(sidebar, setSidebar)}
          ></i>
        </header>

        <div class="menu-bar">
          <div class="menu">
            <li class="search-box">
              <i class="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>

            <ul class="menu-links">
              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-home-alt icon"></i>
                  <span class="text nav-text">Dashboard</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  <span class="text nav-text">Register form</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bell icon"></i>
                  <span class="text nav-text">User form</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bottom-content">
            <li class="">
              <a href="#">
                <i class="bx bx-log-out icon"></i>
                <span class="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
      <section class="home">
        <div className="sidebar_body">{content}</div>
      </section>
    </>
  );
};

export default Sidebar;

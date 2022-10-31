import React, { useState } from "react";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleFun = (state, setState) => {
    setState(!state);
  };
  const removeFun = (boolean, setState) => {
    setState(boolean);
  };

// Formalar\


  
  return (
    <div>
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
                  <span class="text nav-text">Revenue</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-bell icon"></i>
                  <span class="text nav-text">Notifications</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-pie-chart-alt icon"></i>
                  <span class="text nav-text">Analytics</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-heart icon"></i>
                  <span class="text nav-text">Likes</span>
                </a>
              </li>

              <li class="nav-link">
                <a href="#">
                  <i class="bx bx-wallet icon"></i>
                  <span class="text nav-text">Wallets</span>
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

            <li class="mode">
              <div class="sun-moon">
                <i class="bx bx-moon icon moon"></i>
                <i class="bx bx-sun icon sun"></i>
              </div>
              <span class="mode-text text">Dark mode</span>

              <div class="toggle-switch">
                <span class="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>

      <section class="home">
        <div class="text">Dashboard Sidebar</div>
    <div class="container">
      <header>Signup</header>
      <form action="https://www.codinglabweb.com/">
        <div class="field email-field">
          <div class="input-field">
            <input type="email" placeholder="Enter your email" class="email" />
          </div>
          <span class="error email-error">
            <i class="bx bx-error-circle error-icon"></i>
            <p class="error-text">Please enter a valid email</p>
          </span>
        </div>
        <div class="field create-password">
          <div class="input-field">
            <input
              type="password"
              placeholder="Create password"
              class="password"
            />
            <i class="bx bx-hide show-hide"></i>
          </div>
          <span class="error password-error">
            <i class="bx bx-error-circle error-icon"></i>
            <p class="error-text">
              Please enter atleast 8 charatcer with number, symbol, small and
              capital letter.
            </p>
          </span>
        </div>
        <div class="field confirm-password">
          <div class="input-field">
            <input
              type="password"
              placeholder="Confirm password"
              class="cPassword"
            />
            <i class="bx bx-hide show-hide"></i>
          </div>
          <span class="error cPassword-error">
            <i class="bx bx-error-circle error-icon"></i>
            <p class="error-text">Password don't match</p>
          </span>
        </div>
        <div class="input-field button">
          <input type="submit" value="Submit Now" />
        </div>
      </form>
    </div>


      </section>
    </div>
  );
};

export default Sidebar;

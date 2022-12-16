import React from "react";
import "./Navbar.css";
import logo from "./img/logo.png";
import login from "./img/login.svg";

const Navbar = () => {
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="navbar">
            <div className="logoname">
              <img src={logo} alt="Logo" />
              <a href="#">
                <h1>
                  Medical Darpan
                </h1>
              </a>
            </div>
            <div className="navlist">
                <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">Products </a>
                </li>
                <li>
                  <a href="#"> Distributors </a>
                </li>
                <li>
                  <a href="#"> Manufacturers</a>
                </li>
                <li>
                  <a href="#">About Us </a>
                </li>
                <li>
                  <a href="#">Blog </a>
                </li>
              </ul>
            </div>
            <div className="login">
            <a href="#"> <h2>Login</h2> </a>
            <img src={login} alt="Login" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

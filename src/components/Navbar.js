import React from "react";
import "./Navbar.css";
import logo from "../photos/logo.png";
import title from "../photos/title.jpeg";
import { useNavigate } from "react-router-dom";
import { useHref } from "react-router-dom";
import threeLayeredIcon from "../photos/list.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const refer = useHref();

  let clicked = true;
  const threeLayeredInfo = ()=>{
    if(clicked)
    {
      navigate("/three-layered-information");
      clicked = false;
    }
    else{
      navigate("/");
      clicked = true;
    }
  }

  return (
    <>
      <header className="head">
        <div className="left">
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li>
              <img src={title} alt="title" className="title" />
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-page">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact-page">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/community-page">Community</NavLink>
            </li>
            <li>
              <NavLink to="/updates-page">Updates</NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <button
                className="logBtn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Log In
              </button>
            </li>
            <li>
              <button
                className="signBtn"
                onClick={() => {
                  navigate("/registration");
                }}
              >
                Sign Up
              </button>
            </li>
            <li>
              <button
                className="triple-icon-btn"
                onClick={
                  threeLayeredInfo
                }
              >
                <img
                  src={threeLayeredIcon}
                  alt="three-layered-icon"
                  className="triple-icon-img"
                />
              </button>
            </li>
            {/* <li><button className='btn'><img src={person} alt="person" className='person' />  Create your base</button></li> */}
          </ul>
        </div>
      </header>
    </>
  );
}

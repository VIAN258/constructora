import React from 'react'
import styled from 'styled-components'

function Navbar1() {
    return (
        <>
      <NavContainer1>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                React Landing Page
              </a>{" "}
            </div>
    
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#features" className="page-scroll">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#about" className="page-scroll">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="page-scroll">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="page-scroll">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="page-scroll">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#team" className="page-scroll">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="page-scroll">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </NavContainer1>
    </> 
      );
    };

export default Navbar1

const NavContainer1 = styled.nav`
#menu {
    padding: 15px;
    transition: all 0.8s;
  }
  #menu.navbar-default {
    background-color: #fff;
    border-color: rgba(231, 231, 231, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
  #menu a.navbar-brand {
    font-family: "Raleway", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
  }
  #menu.navbar-default .navbar-nav > li > a {
    font-family: "Lato", sans-serif;
    text-transform: uppercase;
    color: #555;
    font-size: 15px;
    font-weight: 400;
    padding: 8px 2px;
    border-radius: 0;
    margin: 9px 20px 0;
  }
  #menu.navbar-default .navbar-nav > li > a:after {
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    content: "";
    transition: width 0.2s;
  }
  #menu.navbar-default .navbar-nav > li > a:hover:after {
    width: 100%;
  }
  .navbar-default .navbar-nav > .active > a,
  .navbar-default .navbar-nav > .active > a:hover,
  .navbar-default .navbar-nav > .active > a:focus {
    background-color: transparent;
  }
  .navbar-default .navbar-nav > .active > a:after,
  .navbar-default .navbar-nav > .active > a:hover:after,
  .navbar-default .navbar-nav > .active > a:focus:after {
    display: block !important;
    position: absolute !important;
    left: 0 !important;
    bottom: -1px !important;
    width: 100% !important;
    height: 2px !important;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%) !important;
    content: "" !important;
    transition: width 0.2s !important;
  }
  .navbar-toggle {
    border-radius: 0;
  }
  .navbar-default .navbar-toggle:hover,
  .navbar-default .navbar-toggle:focus {
    background-color: #fff;
    border-color: #608dfd;
  }
  .navbar-default .navbar-toggle:hover > .icon-bar {
    background-color: #608dfd;
  }
  .section-title {
    margin-bottom: 70px;
  }
  .section-title h2 {
    position: relative;
    margin-top: 10px;
    margin-bottom: 15px;
    padding-bottom: 15px;
  }
  .section-title h2::after {
    position: absolute;
    content: "";
    background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    height: 4px;
    width: 60px;
    bottom: 0;
    margin-left: -30px;
    left: 50%;
  }
  .section-title p {
    font-size: 18px;
  }
  .btn-custom {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    color: #fff;
    background-color: #5ca9fb;
    background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    padding: 14px 34px;
    letter-spacing: 1px;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    border-radius: 25px;
    transition: all 0.5s linear;
    border: 0;
  }
  .btn-custom:hover,
  .btn-custom:focus,
  .btn-custom.focus,
  .btn-custom:active,
  .btn-custom.active {
    color: #fff;
    background-image: none;
    background-color: #6372ff;
  }
  .btn:active,
  .btn.active {
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  a:focus,
  .btn:focus,
  .btn:active:focus,
  .btn.active:focus,
  .btn.focus,
  .btn:active.focus,
  .btn.active.focus {
    outline: none;
    outline-offset: none;
  }
  `
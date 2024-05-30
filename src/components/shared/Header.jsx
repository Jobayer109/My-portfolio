import React, { useEffect, useRef, useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navbarRef = useRef(null);
  const navbarHeight = navbarRef.current ? navbarRef.current.clientHeight : 0;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const activeStyle = { color: "white" };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > navbarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navbarHeight]);

  return (
    <section
      ref={navbarRef}
      className={`navbar ${isSticky ? "sticky" : ""} px-8 lg:px-18`}
      data-aos="fade-down"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64  ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <li onClick={toggleMobileMenu}>
              <Link
                to="/"
                style={location.pathname === "/" ? activeStyle : null}
              >
                Home
              </Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link
                to="/projects"
                style={location.pathname === "/projects" ? activeStyle : null}
              >
                Projects
              </Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link
                to="/contributions"
                style={
                  location.pathname === "/contributions" ? activeStyle : null
                }
              >
                Contributions
              </Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link
                to="/skills"
                style={location.pathname === "/skills" ? activeStyle : null}
              >
                Skills
              </Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link
                to="/about"
                style={location.pathname === "/about" ? activeStyle : null}
              >
                About
              </Link>
            </li>
            <li onClick={toggleMobileMenu}>
              <Link
                to="/contact"
                style={location.pathname === "/contact" ? activeStyle : null}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <HiBars3BottomLeft className="text-3xl hidden lg:block sm:text-end" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link to="/" style={location.pathname === "/" ? activeStyle : null}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              style={location.pathname === "/projects" ? activeStyle : null}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contributions"
              style={
                location.pathname === "/contributions" ? activeStyle : null
              }
            >
              Contributions
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              style={location.pathname === "/skills" ? activeStyle : null}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={location.pathname === "/about" ? activeStyle : null}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={location.pathname === "/contact" ? activeStyle : null}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;

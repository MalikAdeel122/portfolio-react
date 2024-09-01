import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsMoon } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const { pathname } = useLocation();
  const [openSidebar, setOpenSidebar] = useState();

  const nav = [
    {
      label: "Home",
      link: "#",
    },
    {
      label: "About",
      link: "#about",
    },
    {
      label: "Skill",
      link: "#skill",
    },
    {
      label: "Project",
      link: "#project",
    },
    {
      label: "Service",
      link: "#service",
    },
    {
      label: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <div className="header">
        <div className="wrapper app-width">
          <div className="ls">
            <a href="" className="logo">
              {/* <span className="color">S</span>Kill */}
              Adeel Nazeer
            </a>
          </div>

          <div className="rs">
            {nav.map((navbar, index) => (
              <a
                href={navbar.link}
                className={`nav_link ${
                  pathname === navbar.link ? "active" : ""
                }`}
                key={index}
              >
                {navbar.label}
              </a>
            ))}
          </div>
          <div className="end_header">
            <div className="dark_mode">
              <BsMoon />
            </div>
            <div
              className="navbar"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSidebar(true);
              }}
            >
              <IoMenu />
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div
        className={`nav-sidebar ${openSidebar ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="siderbar-header">
          <button className="close-btn" onClick={() => setOpenSidebar(false)}>
            <CgClose />
          </button>
        </div>
        {/* <div className="ls">
          <a href="" className="logo">
            Adeel Nazeer
          </a>
        </div> */}
        <div className="navbar">
          {nav.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`link ${pathname === item.link ? "active" : ""}`}
            >
              <span onClick={() => setOpenSidebar(false)}>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      {openSidebar && <div className="sidebar-overlay" />}
    </>
  );
};

export default Header;

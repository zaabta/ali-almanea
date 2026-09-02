import "./navbar.scss";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pages = [
    ["Home", "home"],
    ["About", "about"],
    ["Services", "services"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["Education", "education"],
    ["Insights", "insights"],
    ["Contact", "contact"],
  ];
  return (
    <>
      <div className="opener">
        <FontAwesomeIcon
          icon={faBars}
          className="closeNav"
          role="button"
          tabIndex="0"
          aria-label="Open navigation"
          onClick={() => setShow(true)}
        />
      </div>
      {show && <div className="nav-backdrop" aria-hidden="true" onClick={() => setShow(false)} />}
      <div className={`navigation ${show ? "active": ""}`}>
        <FontAwesomeIcon
          icon={faTimes}
          className="closeNav"
          role="button"
          tabIndex="0"
          aria-label="Close navigation"
          onClick={() => setShow(false)}
        />
        <div className="logo"><Logo /></div>
        <div className="links">
          <ul>
            {pages.map(([label, id]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setShow(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

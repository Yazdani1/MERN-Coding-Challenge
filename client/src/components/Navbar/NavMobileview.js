import React, { useState, useContext } from "react";
import "./navweb.css";
import "./navmobile.css";
import "./navheader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink, useHistory } from "react-router-dom";

import { AiFillDashboard } from "react-icons/ai";

import { DiGoogleAnalytics } from "react-icons/di";
import { SiGoogleanalytics } from "react-icons/si";

const NavMobileview = () => {
  const [mobilesidebar, setMobilesidebar] = useState(false);

  return (
    <div className="responsivenav">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu
            size={25}
            onClick={() => setMobilesidebar(!mobilesidebar)}
          />
        </p>
      </div>

      {mobilesidebar ? (
        <div className="mobile-nav">
          <NavLink
            to="/contracts/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-mobile-nav">
              <li onClick={() => setMobilesidebar(!mobilesidebar)}>
                <AiFillDashboard size={20} /> Contracts
              </li>
            </div>
          </NavLink>

          <NavLink
            to="/usage/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-mobile-nav">
              <li onClick={() => setMobilesidebar(!mobilesidebar)}>
                <DiGoogleAnalytics size={15} /> Usage
              </li>
            </div>
          </NavLink>

          <NavLink
            to="/usagetwo/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-mobile-nav">
              <li onClick={() => setMobilesidebar(!mobilesidebar)}>
                <SiGoogleanalytics size={15} /> Usage Two
              </li>
            </div>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default NavMobileview;

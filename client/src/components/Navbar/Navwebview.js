import React, { useState, useContext, useEffect } from "react";
import "./navweb.css";
import "./navheader.css";
import { NavLink } from "react-router-dom";
import NavMobileview from "./NavMobileview";
import { AiFillDashboard } from "react-icons/ai";
import ReactTooltip from "react-tooltip";
import { DiGoogleAnalytics } from "react-icons/di";
import {SiGoogleanalytics} from "react-icons/si"
const Navwebview = (props) => {

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  return (
    <div>
      {props.sidebar ? (
        <div className="sidebar-small-design">
          <NavLink
            to="/contracts/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Contracts">
              <div className="sidebar-items">
                <p>
                  <AiFillDashboard size={20} />
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/usage/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Usage">
              <div className="sidebar-items">
                <p>
                  <DiGoogleAnalytics size={20} />
                </p>
              </div>
            </div>
          </NavLink>

          <NavLink
            to="/usagetwo/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <div className="sidebar-item-back" data-tip="Usage Two">
              <div className="sidebar-items">
                <p>
                  <SiGoogleanalytics size={20} />
                </p>
              </div>
            </div>
          </NavLink>
        </div>
      ) : (
        <div className="sidebar-large">
          <NavLink
            to="/contracts/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <AiFillDashboard size={15} /> Contracts
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/usage/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <DiGoogleAnalytics size={15} />
                Usage
              </p>
            </div>
          </NavLink>

          <NavLink
            to="/usagetwo/"
            style={{ textDecoration: "none" }}
            className={({ isActive }) =>
              isActive ? "largenavactive" : "inactive"
            }
          >
            <div className="sidebar-large-navdesign">
              <p>
                <SiGoogleanalytics size={15} />
                Usage Two
              </p>
            </div>
          </NavLink>
        </div>
      )}

      <NavMobileview />
      <ReactTooltip place="right" type="dark" effect="solid" />
    </div>
  );
};

export default Navwebview;

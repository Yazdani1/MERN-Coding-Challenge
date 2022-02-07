import React, { useState, useContext, useEffect } from "react";
import "./navheader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Navwebview from "./Navwebview";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Navheader = (props) => {
  return (
    <>
      <div className="nav-dashboard-headear">
        <li>
          <GiHamburgerMenu size={25} onClick={props.data} />
        </li>
        <ul>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navheader;

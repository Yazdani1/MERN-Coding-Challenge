import React from "react";
import "./navheader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navheader = (props) => {
  return (
    <>
      <div className="nav-dashboard-headear">
        <li>
          <GiHamburgerMenu size={25} onClick={props.data} />
        </li>
        <ul>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <li>Synctive Coding Challenge</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navheader;

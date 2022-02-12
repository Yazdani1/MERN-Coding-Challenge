import React from "react";
import "./navheader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";

const Navheader = (props) => {
  return (
    <>
      <div className="nav-dashboard-headear">
        <li onClick={props.data}>
          {props.sidebar ? (
            <GiHamburgerMenu size={25} />
          ) : (
            <RiCloseFill size={35} />
          )}
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

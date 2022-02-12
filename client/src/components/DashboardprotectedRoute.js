import React, { useState, useEffect } from "react";
import Navwebview from "./Navbar/Navwebview";
import Navheader from "./Navbar/Navheader";
import ReactTooltip from "react-tooltip";

import "./Navbar/navheader.css";
import "./Navbar/navweb.css";
import "./Navbar/navmobile.css";

const DashboardprotectedRoute = (props) => {

  let DashboardProtected = props.DashboardProtect;

  const [sidebar, setSidebar] = useState(true);

  const openNavbar = () => {
    setSidebar(!sidebar);
  };

  useEffect(() => {

    ReactTooltip.rebuild();
  }, []);

  return (
    <div className="container-fluid">
      <Navheader data={openNavbar} sidebar={sidebar}/>

      <div className="row">
        <div className="col-xl-2">
          <Navwebview sidebar={sidebar} />
        </div>
        <div className="col-xl-10">
          <DashboardProtected />
        </div>
      </div>
    </div>
  );
};

export default DashboardprotectedRoute;

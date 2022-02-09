import React from "react";

const Showcontract = ({ machinename, onetimefee, usagefee }) => {
  return (
    <div className="container-fluid  create-event-container">
      <div className="row">
        <div className="col-lg-10 col-xl-10">
          <div className="card-design card">
            <div className="row">
              <div className="col-lg-3 col-xl-3">
                <h6>Machine Name</h6>
                <p>{machinename}</p>
              </div>
              <div className="col-lg-3 col-xl-3">
                <h6>One-Time Fee</h6>
                <p>{onetimefee}</p>
              </div>
              <div className="col-lg-3 col-xl-3">
                <h6>Usage Fee</h6>

                <p>{usagefee}</p>
              </div>
              <div className="col-lg-3 col-xl-3 ">
                <h6>Machine Name</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcontract;

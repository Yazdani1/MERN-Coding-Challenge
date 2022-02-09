import React from "react";

const Showcontract = ({ machinename, onetimefee, usagefee,deletecontractList,contractId }) => {
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
                <p>{parseFloat(onetimefee).toFixed(2)}</p>
              </div>
              <div className="col-lg-3 col-xl-3">
                <h6>Usage Fee</h6>

                <p>{parseFloat(usagefee).toFixed(2)}</p>
              </div>
              <div className="col-lg-3 col-xl-3 ">
                <div className="edit-delete">
                  <div className="button-design">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deletecontractList(contractId);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="button-design">
                    <button
                      className="btn btn-success"
                      // onClick={() => {
                      //   deleteMyjobposts(item._id);
                      // }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcontract;

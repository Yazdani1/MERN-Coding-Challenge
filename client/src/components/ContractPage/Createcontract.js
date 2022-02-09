import React from "react";
import "./contractsPage.css";

const Createcontract = () => {
  return (
    <div className="container-fluid create-event-container">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card event-form-design">
            <div className="text-center">
              <h5 className="text-center">Create Contracts</h5>
            </div>

            <form>
              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  Machine Name
                </label>
                <input
                  type="text"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  maxLength="100"
                />
              </div>

              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  One-Time Fee
                </label>
                <input
                  type="number"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  maxLength="100"
                />
              </div>

              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  Usage Fee
                </label>
                <input
                  type="number"
                  step="0.1"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  maxLength="100"
                />
              </div>

              <div class="form-group justify-content-center align-items-center">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="create-event-button"
                >
                  Create Contracts
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createcontract;

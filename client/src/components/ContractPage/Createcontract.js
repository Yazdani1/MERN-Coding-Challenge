import React, { useEffect, useState, useContext } from "react";
import "./contractsPage.css";
import { createContract } from "./apiContract";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
const Createcontract = () => {
  const [machinename, setMachinename] = useState("");
  const [onetimefee, setOnetimefee] = useState("");
  const [usagefee, setUsagefee] = useState("");
  const [error, setError] = useState(false);

  const machinenameChange = (e) => {
    setError("");
    setMachinename(e.target.value);
  };

  const onetimefeeChange = (e) => {
    setError("");
    setOnetimefee(e.target.value);
  };

  const usagefeeChange = (e) => {
    setError("");
    setUsagefee(e.target.value);
  };

  const createmachineDetails = (e) => {
    e.preventDefault();
    createContract({ machinename, onetimefee, usagefee })
      .then((result) => {
        if (result.error) {
          setError(result.error);
        } else {
          console.log(result);
          toast.success("Your contract has created", {
            position: toast.POSITION.TOP_RIGHT,
          });

          setMachinename("");
          onetimefeeChange("");
          usagefeeChange("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  return (
    <div className="container-fluid create-event-container">
      <div className="row">
        <div className="col-lg-10 col-md-12 col-sm-12">
          <div className="card event-form-design">
            <div className="text-center">
              <h5 className="text-center">Create Contracts</h5>
            </div>

            {showError()}

            <form>
              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  Machine Name
                </label>
                <input
                  type="text"
                  value={machinename}
                  onChange={machinenameChange}
                  className="form-control"
                  maxLength="100"
                />
              </div>

              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  One-Time Fee
                </label>
                <input
                  type="text"
                  value={onetimefee}
                  onChange={onetimefeeChange}
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
                  value={usagefee}
                  onChange={usagefeeChange}
                  className="form-control"
                  maxLength="100"
                />
              </div>

              <div class="form-group justify-content-center align-items-center">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="create-event-button"
                  onClick={(e) => createmachineDetails(e)}
                >
                  Create Contracts
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Createcontract;

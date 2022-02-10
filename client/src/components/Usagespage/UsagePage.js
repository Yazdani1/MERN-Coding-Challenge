import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getmachineContract } from "../ContractPage/apiContract";
import { getsingleMachinedetails } from "./apiUsagepage";

import "./usagepage.css";

const UsagePage = () => {
  //show machine name in select option
  const [machinelist, setMachinelist] = useState([]);

  //machine details state

  const [singlemachine, setSinglemachine] = useState([]);

  //to calculatte contract price need to add usages state

  const [usages, setUsages] = useState("");

  //to show contract price

  const [contractpriceresult, setContractpriceresult] = useState(0);

  //to load all the mashine name
  const loadallMachinelist = () => {
    getmachineContract()
      .then((result) => {
        if (result) {
          setMachinelist(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //to show single machine all the details

  const loadMachinedetails = (e) => {
    getsingleMachinedetails(e.target.value)
      .then((result) => {
        if (result) {
          setSinglemachine(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadallMachinelist();
  }, []);

  //to get contract price

  const contractprice = (e) => {
    e.preventDefault();
    var contractresult =
      parseFloat(singlemachine.onetimefee) +
      parseFloat(singlemachine.usagefee) * parseInt(usages);
    console.log("Addition result:" + contractresult);
    setContractpriceresult(contractresult);
    // setUsages("");
  };

  return (
    <React.Fragment>
      <div className="container card contract-price-cal">
        <div className="event-form">
          <label for="exampleInputEmail1" className="form-label">
            Select Machine Name
          </label>
          <select className="custom-select" onChange={loadMachinedetails}>
            <option value="0">---Select Machine Name---</option>

            {machinelist.map((item) => (
              <>
                <option value={item._id}>{item.machinename} </option>
              </>
            ))}
          </select>
        </div>
      </div>

      {singlemachine._id ? (
        <div className="container card machine-details">
          <div className="machine-details-item">
            <p>{singlemachine.machinename}</p>
            <p>
              One time fee: {parseFloat(singlemachine.onetimefee).toFixed(2)} +
              Usage fee: {parseFloat(singlemachine.usagefee).toFixed(2)}
            </p>
            <form>
              <div className="event-form">
                <label for="exampleInputEmail1" className="form-label">
                  Usages
                </label>
                <input
                  type="number"
                  value={usages}
                  onChange={(e) => setUsages(e.target.value)}
                  className="form-control"
                />
              </div>
              <h6>
                Contract Price: {parseFloat(contractpriceresult).toFixed(2)}
              </h6>
              <div class="form-group justify-content-center align-items-center">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="create-event-button"
                  disabled={!usages}
                  onClick={contractprice}
                >
                  Contract Price
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        "Select machine name"
      )}

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default UsagePage;

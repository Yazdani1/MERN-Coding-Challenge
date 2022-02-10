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

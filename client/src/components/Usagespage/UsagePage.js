import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getmachineContract } from "../ContractPage/apiContract";
import { getsingleMachinedetails } from "./apiUsagepage";
import "./usagepage.css";
import { FcBiomass } from "react-icons/fc";

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
          setContractpriceresult("");
          setUsages("");
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

    if (!usages) {
      toast.error("Please add usages..", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

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
                <option key={item._id} value={item._id}>
                  {item.machinename}{" "}
                </option>
              </>
            ))}
          </select>
        </div>
      </div>

      {singlemachine._id ? (
        <div className="container card machine-details">
          <div className="machine-details-item">
            <h5>{singlemachine.machinename}</h5>
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
                {/* {error ? "Please add usages.." : null} */}
              </div>
              <h6>
                Contract Price:{" "}
                {contractpriceresult
                  ? parseFloat(contractpriceresult).toFixed(2)
                  : "0.00"}
              </h6>
              <div class="form-group justify-content-center align-items-center">
                <button
                  type="submit"
                  name="btnSubmit"
                  className="create-event-button"
                  onClick={contractprice}
                >
                  Contract Price
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h5 className="container card noposts-design">
          <FcBiomass size={200} />
          To calculate contract price, please select a machine name!
        </h5>
      )}

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default UsagePage;

import React, { useEffect, useState } from "react";
import Createcontract from "./Createcontract";
import Showcontract from "./Showcontract";
import { getmachineContract, deleteContracts } from "./apiContract";
import { ToastContainer, toast } from "react-toastify";

const ContractsPage = () => {
  const [contract, setContract] = useState([]);

  //to get all the contracts
  const loadmachineContract = () => {
    getmachineContract()
      .then((result) => {
        if (result) {
          setContract(result);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //to delete contracts

  const deletecontractList = (id) => {
    deleteContracts(id)
      .then((result) => {
        if (result) {
          loadmachineContract();
          toast.success("Your contract has removed", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadmachineContract();
  }, [contract]);

  return (
    <React.Fragment>
      <Createcontract />
      {contract.map((item, index) => (
        <>
          <Showcontract
            machinename={item.machinename}
            onetimefee={item.onetimefee}
            usagefee={item.usagefee}
            contractId={item._id}
            deletecontractList={deletecontractList}
          />
        </>
      ))}

      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default ContractsPage;

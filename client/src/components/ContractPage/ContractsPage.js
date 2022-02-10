import React, { useEffect, useState } from "react";
import Createcontract from "./Createcontract";
import Showcontract from "./Showcontract";
import { getmachineContract, deleteContracts } from "./apiContract";
import { ToastContainer, toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";

const ContractsPage = () => {
  const [contract, setContract] = useState([]);

  //loading
  const [loading, setLoading] = useState(true);

  //to get all the contracts
  const loadmachineContract = () => {
    getmachineContract()
      .then((result) => {
        if (result) {
          setContract(result);
          setLoading(false);
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

  if (loading) {
    return (
      <div class="text-center my-25">
        <h1>
          <SyncOutlined spin />
        </h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Createcontract />
      <div className="create-contracts-container">
        <h6>All Contracts:{contract.length}</h6>

        {contract.map((item, index) => (
          <Showcontract
            key={item._id}
            machinename={item.machinename}
            onetimefee={item.onetimefee}
            usagefee={item.usagefee}
            contractId={item._id}
            deletecontractList={deletecontractList}
          />
        ))}
      </div>
      <ToastContainer autoClose={8000} />
    </React.Fragment>
  );
};

export default ContractsPage;

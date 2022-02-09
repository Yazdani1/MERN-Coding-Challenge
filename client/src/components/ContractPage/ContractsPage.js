import React, { useEffect, useState } from "react";
import Createcontract from "./Createcontract";
import Showcontract from "./Showcontract";
import { getmachineContract } from "./apiContract";

const ContractsPage = () => {
  const [contract, setContract] = useState([]);

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

  useEffect(() => {
    loadmachineContract();
  }, []);

  return (
    <React.Fragment>
      <Createcontract />
      {contract.map((item, index) => (
        <>
          <Showcontract
            machinename={item.machinename}
            onetimefee={item.onetimefee}
            usagefee={item.usagefee}
          />
        </>
      ))}
    </React.Fragment>
  );
};

export default ContractsPage;

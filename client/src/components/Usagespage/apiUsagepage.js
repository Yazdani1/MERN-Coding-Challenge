export const getsingleMachinedetails = (id) => {
  return fetch("/api/contract-details/"+id, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

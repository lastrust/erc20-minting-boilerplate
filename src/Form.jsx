import { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core';
import { Contract } from "ethers";

import data from "./abi.json";

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const abi = data.abi;

const Form = () => {
  const { account, library } = useWeb3React();
  const [contract, setContract] = useState();
  const [balance, setBalance] = useState();
  const [progress, setProgress] = useState(false);
  const [value, setValue] = useState(0);


  useEffect(() => {
    if (library) setup(library);
  }, [library, account]);

  const setup = async (_library) => {
    const signer = _library.getSigner();
    const _contract = new Contract(contractAddress, abi, signer);
    const _balance = await _contract.balanceOf(account);

    setContract(_contract);
    setBalance(_balance.toString());
  };

  const handleChange = (e) => setValue(e.target.value);

  const submit = async () => {
    try {
      const tx = await contract.mint(account, value);
      setProgress(true);

      await tx.wait();
      alert("Transaction was sent in success🎉");
    } finally {
      setProgress(false);
    }
  };

  return (
    <>
      <p>account: {account}</p>
      <p>balance: {balance}</p>
      <p>You can mint your ERC20 if you're the owner</p>
      {
        progress ?
          <p>The transaction is pending...</p> :
          <div>
            <input value={value} onChange={handleChange} type="text" />
            <button onClick={submit}>mint</button>
          </div>
      }
    </>
  );
}

export default Form;

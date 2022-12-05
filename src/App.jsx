import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from "@web3-react/injected-connector";

import Form from './Form';
import "./App.css";

const CHAIN_ID = Number(process.env.REACT_APP_CHAIN_ID || 0);
const connector = new InjectedConnector({ supportedChainIds: [CHAIN_ID] })

const App = () => {
  const { activate, active, error } = useWeb3React();

  const connectToWallet = async () => {
    await activate(connector);
  };

  const connectButton = (<button onClick={connectToWallet}>Connect to Wallet</button>);

  return (
    <div className="App App-header">
      {active ? <Form /> : connectButton}
      {error ? <p>{error.message}</p> : <></>}
    </div>
  );
};

export default App;

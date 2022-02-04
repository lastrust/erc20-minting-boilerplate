import "main.css";
import env from "../env.json";
import bunzz from "bunzz-sdk";

const DAPP_ID = env.JS_DAPP_ID;
const API_KEY = env.JS_API_KEY;
let handler = null,
  userAddress = null,
  contract = null;
const init = async () => {
  handler = await bunzz.initializeHandler({
    dappId: DAPP_ID,
    apiKey: API_KEY,
  });
  return handler;
};

const setup = async () => {
  try {
    userAddress = await handler.getSignerAddress();
    contract = await handler.getContract("Token (ERC20)");
  } catch (error) {
    console.error(error);
  }
};
const main = async () => {
  await init();
  await setup();
  renderContents();
};

const mint = async (value) => {
  await contract.mint(userAddress, value);
  alert("Transaction was sent in success🎉");
};

const renderContents = () => {
  const div = document.createElement("div");
  div.className = "App App-header";

  const pTag = document.createElement("p");
  const pText = document.createTextNode(
    `You can mint your ERC20 if you're the owner`
  );
  pTag.appendChild(pText);

  const inputTag = document.createElement("input");
  inputTag.value = 0;
  inputTag.type = "number";

  const buttonTag = document.createElement("button");
  const buttonText = document.createTextNode(`mint`);
  buttonTag.appendChild(buttonText);

  buttonTag.addEventListener("click", () => {
    const inputElement = document.getElementsByTagName("input");
    const count = inputElement[0].value;
    mint(count);
  });

  document.body.appendChild(div);
  div.appendChild(pTag);
  div.appendChild(inputTag);
  div.appendChild(buttonTag);
};

main();

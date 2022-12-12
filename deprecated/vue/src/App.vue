<template>
  <div className="App App-header">
    <p>You can mint your ERC20 if you're the owner</p>
    <input v-model="value" type="number" />
    <button @click="submit">mint</button>
  </div>
</template>

<script>
import bunzz from "bunzz-sdk";

const DAPP_ID = process.env.VUE_APP_DAPP_ID;
const API_KEY = process.env.VUE_APP_API_KEY;

const init = async () => {
  const handler = await bunzz.initializeHandler({
    dappId: DAPP_ID,
    apiKey: API_KEY,
  });
  return handler;
};

export default {
  name: "App",
  data() {
    return {
      userAddress: null,
      contract: null,
      value: 0,
    };
  },
  created: function () {
    const setup = async () => {
      try {
        const handler = await init();
        const userAddress = await handler.getSignerAddress();
        const contract = await handler.getContract("Token (ERC20)");

        this.userAddress = userAddress;
        this.contract = contract;
      } catch (error) {
        console.error(error);
      }
    };

    setup();
  },
  methods: {
    submit: function () {
      const mint = async () => {
        await this.contract.mint(this.userAddress, this.value);
        alert("Transaction was sent in success🎉");
      };
      mint();
    },
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}
</style>

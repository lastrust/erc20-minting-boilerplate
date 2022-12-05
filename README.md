# ERC20 Minting Boilerplate

By cloning this repository, you can instantly create a mint application of ERC20.

## Getting Started

### 1. Clone

```bash
$ git clone https://github.com/lastrust/erc20-minting-boilerplate.git
$ cd erc20-minting-boilerplate
```

### 2. Create your DApp with Bunzz

Please access to [Bunzz](https://app.bunzz.dev).
For this application, you need to deploy "Token (ERC20)" smart contract at a minimum.

### 3. Configure environment

To make the frontend app interact with the deployed contract, you need to configure environment of the app.

First, create the `.env` file.

```bash
# Create .env file
$ touch .env
```

Contents of `.env` file↓
Please replace YOUR_CHAIN_ID and YOUR_CONTRACT_ADDRESS.
You can copy the **contract address** from the Bunzz dashbord.
If you don't know the chain ID, you can search it in [chainlist.org](https://chainlist.org/).
```
REACT_APP_CHAIN_ID=YOUR_CHAIN_ID
REACT_APP_CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS
```

And when you replace the contract with other module (not "Token(ERC20)"), you need to replace `abi.json` as well. You can copy it from the Bunzz dashboard.

### 4. Start application

```bash
$ yarn install
$ yarn start
```

### 5. Try to use application

This is the screen for minting the ERC20 Token (Funsible Token).
<img width="1440" alt="スクリーンショット 2021-12-14 11 29 07" src="https://user-images.githubusercontent.com/53442928/145922057-66f7e102-17a6-40a1-98c8-4db3335e7c69.png">

Now let's mint the ERC20 Token. Enter the amount of the Token.
When you are done, press the "mint" button.

Minting creates ERC20 Token on the blockchain.

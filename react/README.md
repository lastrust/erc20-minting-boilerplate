# ERC20 Minting Boilerplate

By cloning this repository, you can instantly create a mint application of ERC20.

## Overview

This application uses the [bunzz-sdk](https://www.npmjs.com/package/bunzz-sdk) to communicate smart contact.

For detailed instructions on how to use bunzz-sdk, see [here](https://www.npmjs.com/package/bunzz-sdk).

## Getting Started

### 1. Clone

```bash
$ git clone https://github.com/lastrust/erc20-minting-boilerplate.git
$ cd erc20-minting-boilerplate
```

### 2. Create your DApp with Bunzz

Please access to [Bunzz](https://app.bunzz.dev).
And pease refer to [this video]() to create a DApp project and deploy smart contract.

For this application, you need to deploy "Token (ERC20)" smart contract at a minimum.

### 3. Get DApp ID and API Key

When you have finished creating your DApp project and deploying smart contract, copy the **API key** and **DApp ID**.

You can get your **API Key** and **DApp ID** from **Client SDK** in sidebar.

<img width="235" alt="スクリーンショット 2021-12-09 11 47 40" src="https://user-images.githubusercontent.com/53442928/145325497-913c5509-0b3f-44ea-8a26-ff7399218dbc.png">

And write them in the `.env` file.

```bash
# Create .env file
$ touch .env
```

Contents of `.env` file↓
Please replace YOUR_DAPP_ID and YOUR_API_KEY with values that you copied.
```
REACT_APP_DAPP_ID=YOUR_DAPP_ID
REACT_APP_API_KEY=YOUR_API_KEY
```

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
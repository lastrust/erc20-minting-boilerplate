# ERC20 Minting Boilerplate

By cloning this repository, you can instantly create a mint application of ERC20.

## Overview

This application uses the [bunzz-sdk](https://www.npmjs.com/package/bunzz-sdk) to communicate smart contact.

For detailed instructions on how to use bunzz-sdk, see [here](https://www.npmjs.com/package/bunzz-sdk).

## Getting Started

### 1. Clone

```bash
$ git clone <REPO_URL>
$ cd <into the folder>
```

### 2. Create your DApp with Bunzz

Please access to [Bunzz](https://app.bunzz.dev).
And please refer to [this video]() to create a DApp project and deploy smart contract.

For this application, you need to deploy "Token (ERC20)" smart contract at a minimum.

### 3. Get DApp ID and API Key

When you have finished creating your DApp project and deploying smart contract, copy the **API key** and **DApp ID**.

You can get your **API Key** and **DApp ID** from **Client SDK** in sidebar.

And write them in the `.env` file.

```bash
# Create .env file
$ touch .env
```

Contents of `.env` file↓
Please replace YOUR_DAPP_ID and YOUR_API_KEY with values that you copied.

```
VUE_APP_DAPP_ID=YOUR_DAPP_ID
VUE_APP_API_KEY=YOUR_API_KEY
```

### 4. Start application

```bash
$ yarn install
$ yarn serve
```

### 5. Try to use application

Now let's mint the ERC20 Token. Enter the amount of the Token.
When you are done, press the "mint" button.

Minting creates ERC20 Token on the blockchain.

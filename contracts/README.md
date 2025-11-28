# OpenQuote Smart Contracts

This is the smart contract layer for OpenQuote, a decentralized form and payment system for service businesses. The contracts are built using Hardhat with Solidity and tested using both Foundry and Node.js test runners.

## Overview

### OpenQuoteContract

The core `OpenQuoteContract.sol` manages:
- **Offer Creation**: Service providers deploy contracts with offer details (title, description, service type, deliverables)
- **Trustless Escrow**: MNEE token payments held in smart contract until service completion
- **Deposit System**: Optional deposit amounts with remaining balance payment flow
- **Client Requests**: Clients submit applications with messages and initial payments
- **Completion & Withdrawal**: Service providers mark work complete and withdraw funds
- **Emergency Withdraw**: Clients can reclaim funds if deadline passes without completion
- **Rejection Handling**: Service providers can reject clients and issue refunds

## Project Structure

```
contracts/
├── contracts/
│   ├── OpenQuoteContract.sol      # Main offer contract
│   └── MockERC20.sol              # Test token for development
├── test/
│   └── OpenQuoteContract.js       # Contract tests
├── ignition/
│   ├── modules/
│   │   ├── OpenQuote.ts           # Deployment module
│   │   └── OpenQuoteModule.ts     # Module configuration
│   └── deployments/               # Deployment records
├── scripts/
│   └── send-op-tx.ts              # Utility scripts
├── artifacts/                     # Compiled contracts & ABIs
└── cache/                         # Build cache
```

## Setup & Installation

Install dependencies:
```shell
cd contracts
npm install
# or
yarn install
```

## Building & Deployment

### Compile Contracts

Build with Hardhat:
```shell
yarn build
```

### Apply Contract Changes to Frontend

Update the frontend with latest contract ABIs:
```shell
yarn apply
```

This command compiles contracts and automatically copies ABI and type definitions to the app.

### Running Tests

Run all tests:
```shell
yarn test
# or
npx hardhat test
```

Run specific test suites:
```shell
npx hardhat test solidity    # Solidity tests only
npx hardhat test nodejs      # Node.js/viem tests only
```

### Deploy Locally

Deploy to a local Hardhat node:
```shell
npx hardhat ignition deploy ignition/modules/OpenQuote.ts
```

### Deploy to Sepolia Testnet

Requires a funded wallet. Set your private key:
```shell
npx hardhat keystore set SEPOLIA_PRIVATE_KEY
```

Then deploy:
```shell
npx hardhat ignition deploy --network sepolia ignition/modules/OpenQuote.ts
```

### Deploy to Mainnet

For production deployments on mainnet:
```shell
npx hardhat ignition deploy --network mainnet ignition/modules/OpenQuote.ts
```

## Contract Configuration

The `OpenQuoteContract` is instantiated with:
- **title**: Service offer title
- **description**: Detailed offer description
- **serviceType**: Category of service
- **deliverables**: What will be delivered
- **amount**: Total payment amount (in MNEE tokens)
- **deadline**: Unix timestamp for offer deadline
- **paymentToken**: ERC20 token address for payments (MNEE)
- **depositAmount**: Optional deposit requirement (0 for full upfront payment)

## Key Features

✅ **Decentralized Escrow**: No middleman - funds held in smart contract  
✅ **Flexible Payment**: Support for deposits + remaining balance payment  
✅ **Trustless Completion**: On-chain verification of service delivery  
✅ **Emergency Refunds**: Automatic reclaim if deadline passes  
✅ **Token Agnostic**: Any ERC20 token can be used (configured to MNEE)  
✅ **Reentrancy Protection**: Uses OpenZeppelin's ReentrancyGuard  

## Development

All contracts use:
- **Solidity ^0.8.28**
- **OpenZeppelin Contracts** for security
- **Hardhat** for development and testing
- **Viem** for web3 interactions in tests

## Security Considerations

- All external calls are protected with `nonReentrant` modifier
- Input validation on all state-changing functions
- Proper access control with `onlyOwner` and `onlyClient` modifiers
- Deposit amount must be less than total amount
- Emergency withdraw only available after deadline

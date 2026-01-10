<p align='center'>
    <img src="https://i.ibb.co/svNK8RQd/logo.png" width=600 />
</p>

OpenQuote
---

Transparency, quotes, and payments on-chain for service businesses.

Demo: https://openquote.vercel.app (Mainnet, facilitates payments via MNEE)

Demo video: 

Example deployed contract with completed service payment: https://etherscan.io/address/0xf7ba7656365459ed930b01abb32417c437c6693c

Above contract payment url: https://openquote.vercel.app/offer/0xF7bA7656365459ed930B01AbB32417c437C6693c

Example transaction: https://etherscan.io/tx/0xf73a4f707dc7fe5c86bfb162d0bb40a8dc33becb37fe6ec383c68d08790adf98

## Problem

Service providers, freelancers, and small businesses often struggle to:  

- Collect structured client information (quotes, offers, requests) quickly and reliably  
- Manage payments securely without relying on centralized escrow or third-party platforms  
- Verify approvals, deposits, or milestone completion in a trustless, transparent way  
- Handle authentication and identity verification without complex account setups  

Payment platforms exist however they often charge high fees (2.9%-10%+ per transaction), centralize trust, and require complex account setups and subscription plans.

This friction leads to slower response times, missed opportunities, and disputes between clients and service providers.  

---

## Solution

**OpenQuote** provides a **one-click, decentralized form + payment system** for service providers and clients. Here's the typical user journey:

### Unique Value Propositions

- **Zero Account Friction**: Connect via wallet in seconds using Dynamic. No usernames, passwords, or email verification.
- **Trustless Payment Escrow**: Payments are locked in smart contracts on-chain. Automated release or refund based on completion status—no intermediaries.
- **Transparent Workflow**: Every step (submission → offer → completion) is recorded on-chain, creating immutable audit trails.
- **Custom Contract Logic**: Service providers can define their own terms, milestones, and payment conditions without coding.
- **MNEE-Powered**: Built on the MNEE network for fast, low-cost transactions with immediate finality.
- **Client-Friendly Onboarding**: Clients don't need crypto experience—they just fill a form and confirm payment.
- **AI-Ready Integration**: Built for AI validation of requests, automated offer generation, and smart matching (future).

### How it works (step-by-step):

1. **Connect wallet** via Dynamic → authenticate client/pro
2. **Client submits service request form** (optionally AI-assisted validation)
3. **Smart contract is deployed** via Hardhat → MNEE payment deposited
4. **Service provider reviews request** (optionally AI-assisted offer generation)
5. **Provider marks as complete or rejects** → contract releases or refunds payment on chain.
6. **Optional:** ENS, NFT receipt, and document verification for enhanced trust

---

## Environment Variables

Create a `.env` file in the root directory with the following configuration:

```bash
# Network Configuration
# Set the network to mainnet or sepolia
NEXT_PUBLIC_NETWORK=mainnet

# Dynamic Labs Configuration
# Your Environment ID for wallet connection and authentication
NEXT_PUBLIC_DYNAMIC_ENV_ID=

# MNEE Token Configuration
# Address of the MNEE token contract used for payments
MNEE_TOKEN_ADDRESS=0x8ccedbAe4916b79da7F3F612EfB2EB93A2bFD6cF
```

### Environment Variable Details

| Variable | Purpose | Example |
|----------|---------|----------|
| `NEXT_PUBLIC_NETWORK` | Specifies the blockchain network (mainnet or sepolia) | `mainnet` |
| `NEXT_PUBLIC_DYNAMIC_ENV_ID` | Dynamic Labs environment ID for wallet authentication | `24d67627-bda8-4945-80ec-5a960988ed1a` |
| `MNEE_TOKEN_ADDRESS` | Contract address of the MNEE token used for transaction payments | `0x8ccedbAe4916b79da7F3F612EfB2EB93A2bFD6cF` |

---

## Usage Quick Reference

| Command | Description |
|---------|-------------|
| `yarn build` | Compile all smart contracts and generate artifacts |
| `yarn apply` | Copy contract ABIs and types to the frontend app for integration |
| `yarn test` | Run all contract and integration tests (JS/TS and Solidity) |
| `yarn deploy:openquote:local` | Deploy OpenQuote contracts to a local Hardhat node |
| `npx hardhat ignition deploy --network sepolia ignition/modules/OpenQuote.ts` | Deploy OpenQuote contracts to Ethereum mainnet using Ignition |


## Future Business Model

| Revenue Stream | Description |
|---------------|-------------|
| **Transaction Fees** | 0.5-1% fee on contract creation (much lower than Upwork/Fiverr) |
| **Premium Features** | $10-50/month for analytics, branding, support, bulk tools |
| **Payment Processing** | 0.25% fee on invoices or high-value transactions |
| **Value-Added Services** | Legal templates, dispute resolution, insurance, integrations |
| **Data Insights & Analytics** | Market insights, benchmarking, matching algorithms |

**Why this model?**
- Lower fees and more transparency than traditional platforms
- Recurring revenue from SaaS features and B2B analytics
- Value-added services create new business opportunities

---


## Potential Future Work

* **AI-Powered Request Matching & Recommendations**: Implement ML models to automatically match service requests to qualified providers, suggest pricing, and auto-generate contract terms based on service type and client history.
* **Dispute Resolution & On-chain Arbitration**: Integrate decentralized arbitration protocol (e.g., Kleros) for smart handling of disagreements, with multi-sig escrow release and appeal mechanisms.
* **NFT Receipts & Reputation System**: Issue NFT receipts for completed contracts, build on-chain reputation scores based on completion history, and enable portable credentials for service providers across platforms.

## Useful links
* https://mnee.io/
* https://mnee-eth.devpost.com
* https://mnee-eth.devpost.com/resources



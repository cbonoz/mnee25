import { ethers } from 'ethers';
import { OPENQUOTE_CONTRACT } from './metadata';
import { formatDate, handleContractError } from '.';
import { MNEE_TOKEN_ADDRESS } from '../constants';
import { sepolia, mainnet } from 'viem/chains';

// Helper to get the required chain at runtime (not at module load time)
const getActiveChain = () => {
  return process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? mainnet : sepolia;
};

// Deploy contract function - still needed for creating new offers with ethers
export async function deployContract(
    signer,
    title,
    description,
    serviceType,
    deliverables,
    amount,
    deadline,
    depositPercentage = 0 // Add deposit percentage parameter
) {
    try {
        // Check if signer is available and connected
        if (!signer) {
            throw new Error('No signer available. Please connect your wallet.');
        }

        // Get the active chain at runtime
        const activeChain = getActiveChain();

        // Get the current network from the signer
        const network = await signer.provider.getNetwork();
        console.log('Deploying to network:', network.name, network.chainId);

        // Check if we're on the expected network
        if (network.chainId !== activeChain.id) {
            const currentNetworkName = network.chainId === 11155111 ? 'Sepolia Testnet' : 
                                     network.chainId === 1 ? 'Ethereum Mainnet' : 
                                     `Unknown (${network.chainId})`;
            throw new Error(`Wrong network! Expected ${activeChain.name} (${activeChain.id}) but connected to ${currentNetworkName}. Please switch your wallet to ${activeChain.name}.`);
        }

        // Deploy contract with ethers
        const factory = new ethers.ContractFactory(
            OPENQUOTE_CONTRACT.abi,
            OPENQUOTE_CONTRACT.bytecode,
            signer
        );

        // Convert amount to Wei units (MNEE uses 6 decimals)
        const amountInWei = ethers.utils.parseUnits(amount.toString(), 6);
        
        // Calculate deposit amount in Wei (if depositPercentage is provided)
        const depositAmountInWei = depositPercentage > 0 
            ? amountInWei.mul(depositPercentage).div(100)
            : ethers.BigNumber.from(0);

        console.log(
            'Deploying offer contract...',
            'Title:', title,
            'Description:', description,
            'Service Type:', serviceType,
            'Deliverables:', deliverables,
            'Amount (MNEE):', amount,
            'Amount (Wei):', amountInWei.toString(),
            'Deposit Percentage:', depositPercentage,
            'Deposit Amount (Wei):', depositAmountInWei.toString(),
            'Deadline:', deadline,
            'MNEE Token Address:', MNEE_TOKEN_ADDRESS
        );

        // Deploy the contract with constructor parameters
        const contract = await factory.deploy(
            title,
            description,
            serviceType,
            deliverables,
            amountInWei,
            deadline,
            MNEE_TOKEN_ADDRESS,  // Use the MNEE token address passed as constructor argument
            depositAmountInWei    // Add deposit amount parameter
        );

        console.log('Contract deployment initiated. Waiting for confirmation...');
        console.log('Contract address:', contract.address);
        console.log('Transaction hash:', contract.deployTransaction.hash);

        // Wait for the contract to be deployed
        await contract.deployed();
        console.log('Contract deployed successfully!');

        return {
            address: contract.address,
            transaction: contract.deployTransaction
        };
    } catch (error) {
        console.error('Contract deployment failed:', error);
        handleContractError(error, 'deploy contract');
        throw error;
    }
}

// Legacy function kept for compatibility - consider migrating to viem version
export const getClientRequest = (contractAddress) => {
    const offerRequests = JSON.parse(localStorage.getItem('offerRequests') || '{}');
    return offerRequests[contractAddress] || null;
};

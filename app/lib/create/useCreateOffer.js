'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, message } from 'antd';
import { deployContract } from '../../util/appContract';
import { useEthersSigner } from '../../hooks/useEthersSigner';
import { useNetworkSwitcher } from '../../hooks/useNetworkSwitcher';
import { useWalletAddress } from '../../hooks/useWalletAddress';

export default function useCreateOffer() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [offerData, setOfferData] = useState({});
    const [contractAddress, setContractAddress] = useState(null);
    const [deploymentError, setDeploymentError] = useState(null);
    const router = useRouter();
    const signer = useEthersSigner();
    const { address: walletAddress } = useWalletAddress();
    const { ensureCorrectNetwork, requiredNetwork } = useNetworkSwitcher();

    const handleNext = async () => {
        try {
            const values = await form.validateFields();
            setOfferData({ ...offerData, ...values });
            setCurrentStep(currentStep + 1);
        } catch (error) {
            console.error('Validation failed:', error);
        }
    };

    const handlePrevious = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleCreateOffer = async () => {
        try {
            setLoading(true);
            setDeploymentError(null); // Clear previous errors
            const values = await form.validateFields();
            const finalOfferData = { ...offerData, ...values };
            
            console.log('Creating offer with data:', finalOfferData);

            // Check wallet connection first
            if (!walletAddress) {
                const err = 'Please connect your wallet before deploying the contract';
                setDeploymentError(err);
                message.error(err);
                return;
            }

            if (!signer) {
                const err = 'Wallet connection error. Please try reconnecting your wallet';
                setDeploymentError(err);
                message.error(err);
                return;
            }

            // Ensure we're on the correct network before deploying
            try {
                await ensureCorrectNetwork();
            } catch (networkError) {
                const err = `Network Error: ${networkError.message}`;
                setDeploymentError(err);
                message.error(err);
                return;
            }

            // Calculate deadline (convert timeline to timestamp)
            const deadlineDate = new Date();
            deadlineDate.setDate(deadlineDate.getDate() + 30); // Default 30 days from now
            const deadline = Math.floor(deadlineDate.getTime() / 1000);

            // Deploy the smart contract using updated appContract.js
            const contract = await deployContract(
                signer,
                finalOfferData.title,
                finalOfferData.description,
                finalOfferData.category, // serviceType
                finalOfferData.deliverables,
                finalOfferData.amount,
                deadline,
                finalOfferData.depositPercentage || 0 // Add deposit percentage
            );

            if (contract && contract.address) {
                setContractAddress(contract.address);
                message.success('Offer contract deployed successfully!');
                setCurrentStep(currentStep + 1);
                
                // Store the contract address for navigation
                localStorage.setItem('lastDeployedContract', contract.address);
                
                // Store offer in user's offers list
                const userAddress = await signer.getAddress();
                const storedOffers = JSON.parse(localStorage.getItem('userOffers') || '[]');
                const newOffer = {
                    contractAddress: contract.address,
                    owner: userAddress,
                    createdAt: new Date().toLocaleDateString(),
                    title: finalOfferData.title,
                    description: finalOfferData.description,
                    serviceType: finalOfferData.category,
                    amount: finalOfferData.amount
                };
                
                const updatedOffers = [...storedOffers, newOffer];
                localStorage.setItem('userOffers', JSON.stringify(updatedOffers));
            } else {
                const err = 'Contract deployment failed - no address returned';
                setDeploymentError(err);
                throw new Error(err);
            }
            
        } catch (error) {
            const errorMsg = error.message || error.toString();
            console.error('Error creating offer:', error);
            setDeploymentError(errorMsg);
            message.error(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateAnother = () => {
        // Reset form and state
        form.resetFields();
        setOfferData({});
        setCurrentStep(0);
        setContractAddress(null);
        router.push('/create');
    };

    const handleRetry = async () => {
        try {
            // Force ensure correct network before retry
            await ensureCorrectNetwork();
            // Give network a moment to settle
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Retry deployment
            await handleCreateOffer();
        } catch (error) {
            message.error(`Retry failed: ${error.message}`);
        }
    };

    const handleViewDashboard = () => {
        router.push('/dashboard');
    };

    return {
        form,
        loading,
        currentStep,
        offerData,
        contractAddress,
        walletAddress,
        deploymentError,
        handleNext,
        handlePrevious,
        handleCreateOffer,
        handleRetry,
        handleCreateAnother,
        handleViewDashboard,
        setCurrentStep
    };
}

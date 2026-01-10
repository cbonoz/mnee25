'use client';

import React, { useState } from 'react';
import { 
    Button, 
    Card, 
    Typography, 
    Divider, 
    Spin,
    Alert,
    Modal,
    Space
} from 'antd';
import { PlusOutlined, WalletOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useWalletAddress } from '../../hooks/useWalletAddress';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

const { Title, Paragraph, Text } = Typography;


export default function DeployStepContent({ 
    loading, 
    offerData, 
    onDeploy,
    deploymentError,
    onRetry
}) {
    const { address: walletAddress } = useWalletAddress();
    const [showWalletError, setShowWalletError] = useState(false);
    const [isRetrying, setIsRetrying] = useState(false);

    const handleDeploy = () => {
        if (!walletAddress) {
            setShowWalletError(true);
            return;
        }
        setShowWalletError(false);
        onDeploy();
    };

    // Show error modal if deployment failed
    React.useEffect(() => {
        if (deploymentError) {
            const isNetworkError = deploymentError.includes('network') || 
                                   deploymentError.includes('Network') ||
                                   deploymentError.includes('switched');
            
            Modal.error({
                title: 'Deployment Failed',
                icon: <ExclamationCircleOutlined />,
                content: (
                    <div>
                        <Paragraph>
                            <strong>Error:</strong> {deploymentError}
                        </Paragraph>
                        {isNetworkError && (
                            <Alert
                                message="Network Issue Detected"
                                description="Your wallet may have switched networks. We can attempt to fix this automatically by switching to the correct network and retrying."
                                type="warning"
                                showIcon
                                style={{ marginBottom: 16, marginTop: 16 }}
                            />
                        )}
                        <Paragraph type="secondary" style={{ marginTop: 16 }}>
                            Troubleshooting steps:
                        </Paragraph>
                        <ul style={{ paddingLeft: 20 }}>
                            <li>Ensure you're connected to the correct network (check your .env NEXT_PUBLIC_NETWORK setting)</li>
                            <li>Verify your wallet has sufficient balance for gas fees</li>
                            <li>Try disconnecting and reconnecting your wallet</li>
                            {!isNetworkError && <li>Refresh the page and try again</li>}
                        </ul>
                    </div>
                ),
                footer: [
                    <Button key="close" onClick={() => Modal.destroyAll()}>
                        Close
                    </Button>,
                    isNetworkError && (
                        <Button 
                            key="retry" 
                            type="primary" 
                            loading={isRetrying}
                            onClick={async () => {
                                setIsRetrying(true);
                                try {
                                    await onRetry?.();
                                } finally {
                                    setIsRetrying(false);
                                }
                            }}
                        >
                            Retry Deployment
                        </Button>
                    )
                ].filter(Boolean),
                width: 600
            });
        }
    }, [deploymentError, onRetry]);

    if (loading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spin size="large" />
                <Title level={3} style={{ marginTop: 24 }}>
                    Deploying Smart Contract...
                </Title>
                <Paragraph type="secondary">
                    Creating your decentralized offer on-chain. This may take a moment.
                </Paragraph>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Title level={3}>Review & Deploy</Title>
            <Paragraph type="secondary">
                Review your offer details and deploy the smart contract.
            </Paragraph>
            <Card style={{ textAlign: 'left', marginBottom: 24 }}>
                <Title level={4}>{offerData.title}</Title>
                <Text type="secondary">{offerData.category}</Text>
                <Divider />
                <Paragraph>{offerData.description}</Paragraph>
                <Text strong>Amount: ${offerData.amount} MNEE</Text>
                <br />
                <Text strong>Payment Type: {offerData.paymentType}</Text>
                {offerData.paymentType === 'deposit' && offerData.depositPercentage !== undefined && (
                    <>
                        <br />
                        <Text strong>Deposit Required: {offerData.depositPercentage}%</Text>
                    </>
                )}
            </Card>
            {showWalletError && (
                <Alert
                    message="Wallet Required"
                    description="You need to connect your wallet to deploy the smart contract. Please connect your wallet to continue."
                    type="error"
                    showIcon
                    style={{ marginBottom: 16 }}
                />
            )}
            <Button 
                type="primary" 
                size="large"
                icon={<PlusOutlined />}
                onClick={handleDeploy}
                loading={loading}
            >
                Deploy Offer Contract
            </Button>
        </div>
    );
}

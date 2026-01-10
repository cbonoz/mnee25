'use client';

import {
  DynamicContextProvider,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";

import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import {
  createConfig,
  WagmiProvider,
} from 'wagmi';
import {siteConfig, ACTIVE_CHAIN} from '../constants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';
import { sepolia, mainnet } from 'viem/chains';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

// Get the appropriate chains based on environment
const getSupportedChains = (isMain) => {
  return isMain ? [mainnet] : [sepolia];
};

// Create config that respects the environment
const wagmiConfig = (() => {
  const isMain = process.env.NEXT_PUBLIC_NETWORK === 'mainnet';
  const defaultChainId = isMain ? mainnet.id : sepolia.id;
  
  // Always include both chains in Wagmi config for proper connector support
  // but set the default to the appropriate one
  return createConfig({
    chains: [mainnet, sepolia],
    defaultChainId: defaultChainId,
    multiInjectedProviderDiscovery: false,
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });
})();

const queryClient = new QueryClient();

const DynamicWrapper = ({ children }) => {
  return (
    <DynamicContextProvider
      settings={{
        // Environment ID provided by user
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID || "17f8076d-1654-4b59-8745-c38137f5a7d1",
        walletConnectors: [EthereumWalletConnectors],
        appName: siteConfig.title,
        appLogoUrl: "/logo.png",
        primaryColor: "#ec348b",
        borderRadius: 8,
      }}
    >
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            {children}
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
};

export default DynamicWrapper;

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { Web3Modal, Web3Button } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";
// import CustomButton from "./components/CustomButton";


const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: "bbb8668b2726203d73ad8be2efb70d87" }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: "bbb8668b2726203d73ad8be2efb70d87",
    version: "1", // or "2"
    appName: "web3Modal",
    chains,
  }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
    
      </WagmiConfig>
      <Web3Button />

      <Web3Modal
        projectId="bbb8668b2726203d73ad8be2efb70d87"
        ethereumClient={ethereumClient}
      />

    </>
  );
}

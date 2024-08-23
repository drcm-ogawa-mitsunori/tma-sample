import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
// import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import '../node_modules/@rainbow-me/rainbowkit/dist/index.css';
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import App from './App.tsx'
import './index.css'

WebApp.ready();

// const wagmiConfig = getDefaultConfig({
//   appName: 'ConnectingSample',
//   projectId: '8567dd969dc3063903b6b85d864257fb',
//   chains: [mainnet],
// });
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '8567dd969dc3063903b6b85d864257fb'

// 2. Create wagmiConfig
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet] as const;

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig,
  projectId,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json">
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {/* <RainbowKitProvider> */}
            <App />
          {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    </TonConnectUIProvider>
  </React.StrictMode>,
)

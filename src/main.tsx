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
// import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import App from './App.tsx'
import './index.css'

// NOTE: https://github.com/orgs/WalletConnect/discussions/4574#discussioncomment-9992027
window.open = (function (open) {
	return function (url, _, features) {
		return open.call(window, url, "_blank", features);
	};
})(window.open);

WebApp.ready();

// NOTE: WebApp.openLink を使う、駄目でした
// window.open = (url?: string | URL, _target?: string, _features?: string) => {
//   if (typeof url === 'string') {
//     WebApp.openLink(url);
//     return window;
//   } else if (url) {
//     WebApp.openLink(url.toString());
//     return window;
//   }
//   return null;
// }

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
      {/* <MetaMaskUIProvider
        sdkOptions={{
          dappMetadata: {
            name: "Example React UI Dapp",
            url: window.location.href,
          },
          infuraAPIKey: '4e4a26022bed4b7abe20bd06b1a9a9d5',
        }}
      >
        <App />
      </MetaMaskUIProvider> */}
    </TonConnectUIProvider>
  </React.StrictMode>,
)

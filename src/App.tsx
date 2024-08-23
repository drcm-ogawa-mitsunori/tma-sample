import { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
// import { ConnectButton } from '@rainbow-me/rainbowkit';
// import {
//   MetaMaskButton,
//   useAccount,
// } from "@metamask/sdk-react-ui"

// NOTE: https://github.com/orgs/WalletConnect/discussions/4574#discussioncomment-9992027
const originalOpen = window.open;
window.open = (function (open) {
	return function (url, _target, _features) {
		return open.call(window, url);
	};
})(window.open);

function App() {
  const [count, setCount] = useState(0);
  // const { isConnected, connector } = useAccount();
  
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => WebApp.showAlert('this is tma-sample.')}>
          showAlert
        </button>
        <TonConnectButton />
        <br />
        {/* <ConnectButton /> */}
        <br />
        <w3m-button />
        {/* { isConnected ? (
          <button onClick={() => connector?.disconnect()}>
            disconnect MetaMask
          </button>
        ) : (
          <MetaMaskButton />
        )} */}
        <button onClick={() => window.open('https://metamask.app.link/dapp/example.com')}>
          window.open
        </button>
        <button onClick={() => originalOpen('https://metamask.app.link/dapp/example.com', '_blank')}>
          window.open to blank
        </button>
        <button onClick={() => WebApp.openLink('https://metamask.app.link/dapp/example.com')}>
          WebApp.openLink
        </button>
        <button onClick={() => WebApp.openTelegramLink('https://t.me/wallet')}>
          WebApp.openTelegramLink
        </button>
        <button onClick={() => window.open('metamask://dapp/example.com', '_blank')}>
          window.open Metamask native
        </button>
      </div>
    </>
  )
}

export default App

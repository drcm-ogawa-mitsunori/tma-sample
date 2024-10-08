import { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
import { useAccount, useSignMessage } from 'wagmi';
import { URLSearchParams } from 'url';
import { SearchParamsViewer } from './components/SearchParamsViewer';
import { WebAppViewer } from './components/WebAppViewer';
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

const shareParams = new URLSearchParams({
  url: "https://t.me/OgawaTestBot/gameapp?startapp=rp_29054580",
  text: "私は小川。\n共に戦おう。",
});
const shareUrl = `https://t.me/share/url?${shareParams.toString()}`

function App() {
  const [count, setCount] = useState(0);
  // const { isConnected, connector } = useAccount();
  const { isConnected } = useAccount();
  const { signMessage } = useSignMessage();


  https://t.me/share/url?url ={url}&text={text}
  
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
        { isConnected && (
          <button onClick={() => signMessage({ message: 'ogwmtnr sample.' })}>
            signMessage
          </button>
        )}
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
        <button onClick={() => WebApp.openTelegramLink(shareUrl)}>
          Invite Message
        </button>
        <SearchParamsViewer />
        <WebAppViewer />
      </div>
    </>
  )
}

export default App

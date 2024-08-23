import { useState } from 'react'
import WebApp from '@twa-dev/sdk'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'
// import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        <button onClick={() => window.open('http://example.com', '_blank')}>
          window.open
        </button>
        <button onClick={() => WebApp.openLink('http://example.com')}>
          WebApp.openLink
        </button>
        <button onClick={() => WebApp.openTelegramLink('https://t.me/CatizenAI/60111/100980')}>
          WebApp.openTelegramLink
        </button>
      </div>
    </>
  )
}

export default App

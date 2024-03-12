'use client'
import "./globals.css";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Header from '../app/components/Header';
import { useEffect, useState } from "react";

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  const [ready, setReady] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  // Funzione per cambiare il tab attivo
  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  useEffect(() => {
    setReady(true);
  }, []);

  return (

    <>

      <div className="App" >
        <Header />
        <div className="content">
          <div>
            <div>
              {/*<h2>Account</h2>

               <div>
                status: {account.status}
                <br />
                addresses: {JSON.stringify(account.addresses)}
                <br />
                chainId: {account.chainId}
              </div>

              {account.status === 'connected' && (
                <button type="button" onClick={() => disconnect()}>
                  Disconnect
                </button>
              )}
            </div> 

            <div>*/}
              <h2>Connect</h2>
              {connectors.map((connector) => (
                <button className=".connect-wallet"
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  type="button"
                >
                  {connector.name}
                </button>
              ))}
              <div>{status}</div>
              <div>{error?.message}</div>
            </div>
          </div>
          <img src="url_della_tua_immagine.jpg" alt="Descrizione" className="main-photo" />
        </div>
        <div>
        </div>
        {/* Altri componenti o contenuti possono seguire qui */}
        <div className="tab-headers">
          <button onClick={() => changeTab(1)}>Tab 1</button>
          <button onClick={() => changeTab(2)}>Tab 2</button>
          <button onClick={() => changeTab(3)}>Tab 3</button>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            // Contenuto per il Tab 1
            <div className="tab-element">
              <div>Contenitore 1 - Tab 1</div>
              <div>Contenitore 2 - Tab 1</div>
              <div>Contenitore 3 - Tab 1</div>
              <div>Contenitore 4 - Tab 1</div>
              <div>Contenitore 5 - Tab 1</div>
            </div>
          )}
          {activeTab === 2 && (
            // Contenuto per il Tab 2
            <div className="tab-content">
              <div>Contenitore 1 - Tab 2</div>
              <div>Contenitore 2 - Tab 2</div>
              <div>Contenitore 3 - Tab 2</div>
              <div>Contenitore 4 - Tab 2</div>
              <div>Contenitore 5 - Tab 2</div>
            </div>
          )}
          {activeTab === 3 && (
            // Contenuto per il Tab 3
            <div className="tab-content">
              <div>Contenitore 1 - Tab 3</div>
              <div>Contenitore 2 - Tab 3</div>
              <div>Contenitore 3 - Tab 3</div>
              <div>Contenitore 4 - Tab 3</div>
              <div>Contenitore 5 - Tab 3</div>
            </div>
          )}
        </div>
        {/* Altri componenti o contenuti possono seguire qui */}
      </div>

    </>
  )
}

export default App

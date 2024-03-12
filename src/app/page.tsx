'use client'
import "./globals.css";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Header from '../app/components/Header';
import { useEffect, useState } from "react";
import Image from 'next/image';

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
          <img className="DeFiLogoPhoto" src="/images/1.PWRBALL.png" alt="Descrizione" />
        </div>
        <div>
        </div>
        {/* Altri componenti o contenuti possono seguire qui */}
        <div className="tab-headers">
          <button className={activeTab === 1 ? 'tab-active' : ''} onClick={() => changeTab(1)}>BRONZE 20X</button>
          <button className={activeTab === 2 ? 'tab-active' : ''} onClick={() => changeTab(2)}>SILVER 50X</button>
          <button className={activeTab === 3 ? 'tab-active' : ''} onClick={() => changeTab(3)}>GOLD 100X</button>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            // Contenuto per il Tab 1
            <div className="divisor">
              <div className="tab-element">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            // Contenuto per il Tab 2
            <div className="divisor">
              <div className="tab-element">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            // Contenuto per il Tab 3
            <div className="tab-content">
              <div className="tab-element">
                <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                </div>
                </div>
                <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Altri componenti o contenuti possono seguire qui */}
      </div >

    </>
  )
}

export default App

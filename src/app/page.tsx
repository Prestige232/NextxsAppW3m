'use client'
import "./globals.css";
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import Header from '../app/components/Header';
import { useEffect, useState } from "react";
import Image from 'next/image';
import { GridComponent, GridRow } from "./components/GridComponent";
import { Ticket, Price } from "./components/TicketPrice";
import WinnerBanner from "./components/WinnerBanner";
import InstatPayout from "./components/InstatPayout";
import CustomButton from "./components/CustomButton";
import Aviability from "./components/Aviability";
import Footer from "./components/Footer";

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
  const handleClick = () => {
    alert('Bottone cliccato!');
  };
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
            <div className="tab-element">
              <div className="tiercontainar">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket >Ticket 100</Ticket>
                  <Price >Price 0.01 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div >1st</div>
                    <div >20X/0.2 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/0.1 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/0.005 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background" text="BUY TIER 1" onClick={handleClick} />
                <Aviability text="100/100" className="aviability" />

              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.05 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div >1st</div>
                    <div >20X/1 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/0.5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/0.25 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background" text="BUY TIER 2" onClick={handleClick} />
                <Aviability text="100/100" className="aviability" />

              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.1 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div >1st</div>
                    <div >20X/2 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/1 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/0.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background" text="BUY TIER 3" onClick={handleClick} />
                <Aviability text="100/100" className="aviability" />

              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.5 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div>1st</div>
                    <div >20X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/2.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background" text="BUY TIER 4" onClick={handleClick} />
                <Aviability text="100/100" className="aviability" />
              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 1 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div >1st</div>
                    <div >20X/20 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background" text="BUY TIER 5" onClick={handleClick} />
                <Aviability text="100/100" className="aviability" />
              </div>
            </div>
          )}
          {activeTab === 2 && (
            // Contenuto per il Tab 2
            <div className="tab-element">
              <div className="tiercontainar">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 1 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div >1st</div>
                    <div >20X/20 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background-silver" text="BUY TIER 1" onClick={handleClick} />
                <Aviability text="100/100" className="aviability-silver" />
              </div>

              <div className="tiercontainar">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.5 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div>1st</div>
                    <div >20X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/2.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background-silver" text="BUY TIER 2" onClick={handleClick} />
                <Aviability text="100/100" className="aviability-silver" />
              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.5 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div>1st</div>
                    <div >20X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/2.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background-silver" text="BUY TIER 3" onClick={handleClick} />
                <Aviability text="100/100" className="aviability-silver" />
              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.5 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div>1st</div>
                    <div >20X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/2.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background-silver" text="BUY TIER 4" onClick={handleClick} />
                <Aviability text="100/100" className="aviability-silver" />
              </div>
              <div className="tiercontainar">
                <div className="u-expanded-width2 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                  <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                </div>
                </div>
                <div>
                  <Ticket>Ticket 100</Ticket>
                  <Price>Price 0.5 ETH</Price>
                </div>
                <GridComponent>
                  <GridRow>
                    <div>1st</div>
                    <div >20X/10 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >2nd</div>
                    <div >10X/5 ETH</div>
                  </GridRow>
                  <GridRow>
                    <div >3rd</div>
                    <div >5X/2.5 ETH</div>
                  </GridRow>
                </GridComponent>
                <WinnerBanner text="50% of all tickets win cost of entry" />
                <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                <CustomButton className="custom-button-background-silver" text="BUY TIER 5" onClick={handleClick} />
                <Aviability text="100/100" className="aviability-silver" />
              </div>
            </div>

          )}
          {activeTab === 3 && (
            // Contenuto per il Tab 3
            <div className="tab-content">
              <div className="tab-element">
                <div className="tiercontainar">
                  <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                    <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier1.png" alt="" />
                  </div>
                  </div>
                  <div>
                    <Ticket>Ticket 100</Ticket>
                    <Price>Price 0.5 ETH</Price>
                  </div>
                  <GridComponent>
                    <GridRow>
                      <div>1st</div>
                      <div >20X/10 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >2nd</div>
                      <div >10X/5 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >3rd</div>
                      <div >5X/2.5 ETH</div>
                    </GridRow>
                  </GridComponent>
                  <WinnerBanner text="50% of all tickets win cost of entry" />
                  <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                  <CustomButton className="custom-button-background-gold" text="BUY TIER 1" onClick={handleClick} />
                  <Aviability text="100/100" className="aviability-gold" />
                </div>
                <div className="tiercontainar">
                  <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                    <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier2.png" alt="" />
                  </div>
                  </div>
                  <div>
                    <Ticket>Ticket 100</Ticket>
                    <Price>Price 0.5 ETH</Price>
                  </div>
                  <GridComponent>
                    <GridRow>
                      <div>1st</div>
                      <div >20X/10 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >2nd</div>
                      <div >10X/5 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >3rd</div>
                      <div >5X/2.5 ETH</div>
                    </GridRow>
                  </GridComponent>
                  <WinnerBanner text="50% of all tickets win cost of entry" />
                  <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                  <CustomButton className="custom-button-background-gold" text="BUY TIER 2" onClick={handleClick} />
                  <Aviability text="100/100" className="aviability-gold" />
                </div>
                <div className="tiercontainar">
                  <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                    <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier3.png" alt="" />
                  </div>
                  </div>
                  <div>
                    <Ticket>Ticket 100</Ticket>
                    <Price>Price 0.5 ETH</Price>
                  </div>
                  <GridComponent>
                    <GridRow>
                      <div>1st</div>
                      <div >20X/10 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >2nd</div>
                      <div >10X/5 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >3rd</div>
                      <div >5X/2.5 ETH</div>
                    </GridRow>
                  </GridComponent>
                  <WinnerBanner text="50% of all tickets win cost of entry" />
                  <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                  <CustomButton className="custom-button-background-gold" text="BUY TIER 3" onClick={handleClick} />
                  <Aviability text="100/100" className="aviability-gold" />
                </div>
                <div className="tiercontainar">
                  <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                    <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier4.png" alt="" />
                  </div>
                  </div>
                  <div>
                    <Ticket>Ticket 100</Ticket>
                    <Price>Price 0.5 ETH</Price>
                  </div>
                  <GridComponent>
                    <GridRow>
                      <div>1st</div>
                      <div >20X/10 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >2nd</div>
                      <div >10X/5 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >3rd</div>
                      <div >5X/2.5 ETH</div>
                    </GridRow>
                  </GridComponent>
                  <WinnerBanner text="50% of all tickets win cost of entry" />
                  <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                  <CustomButton className="custom-button-background-gold" text="BUY TIER 4" onClick={handleClick} />
                  <Aviability text="100/100" className="aviability-gold" />
                </div>
                <div className="tiercontainar">
                  <div className="u-expanded-width3 u-image u-image-round u-radius u-image-48 tier-text" >Tier<div>
                    <img className="u-image u-image-contain u-image-default u-image-49" src="images/Tier5.png" alt="" />
                  </div>
                  </div>

                  <div>
                    <Ticket>Ticket 100</Ticket>
                    <Price>Price 0.5 ETH</Price>
                  </div>
                  <GridComponent>
                    <GridRow>
                      <div>1st</div>
                      <div >20X/10 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >2nd</div>
                      <div >10X/5 ETH</div>
                    </GridRow>
                    <GridRow>
                      <div >3rd</div>
                      <div >5X/2.5 ETH</div>
                    </GridRow>
                  </GridComponent>
                  <WinnerBanner text="50% of all tickets win cost of entry" />
                  <InstatPayout text="INSTANT PAYOUTS ON ALL PRIZES" />
                  <CustomButton className="custom-button-background-gold" text="BUY TIER 5" onClick={handleClick} />
                  <Aviability text="100/100" className="aviability-gold" />
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer></Footer>
        {/* Altri componenti o contenuti possono seguire qui */}
      </div >

    </>
  )
}

export default App

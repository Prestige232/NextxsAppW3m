// components/Header.tsx
import React from 'react';
import Image from 'next/image';
import "./Header.css";


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Image src="/images/DefAiLabsLogoMini.png" alt="DeFi Lab Logo" width={50} height={50} />
            </div>
            <div className="navigation">
                <button className="nav-button">Home</button>
                <button className="nav-button">DAPP</button>
                <div className="hamburger-menu">☰</div>
            </div>
        </div>
    );
};

export default Header;


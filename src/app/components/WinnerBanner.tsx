import React from 'react';

interface WinnerBannerProps { // Rinominata per corrispondere all'uso nel componente
  text: string; // Definizione del tipo per la prop text
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ text }) => (
  <div>{text}</div>
);

export default WinnerBanner;

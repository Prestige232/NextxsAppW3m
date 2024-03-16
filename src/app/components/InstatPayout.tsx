import React from 'react';

interface InstatPayoutProps { // Rinominata per corrispondere all'uso nel componente
    text: string; // Definizione del tipo per la prop text
}

const InstatPayout: React.FC<InstatPayoutProps> = ({ text }) => (
    <div>{text}</div>
);

export default InstatPayout;

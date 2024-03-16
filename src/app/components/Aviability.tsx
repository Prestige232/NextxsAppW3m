import React from 'react';

interface AviabilityProps { // Rinominata per corrispondere all'uso nel componente
    text: string; // Definizione del tipo per la prop text
}

const Aviability: React.FC<AviabilityProps> = ({ text }) => (
    <div>{text}</div>
);

export default Aviability;
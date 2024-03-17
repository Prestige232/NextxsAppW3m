import React from 'react';
import "./Aviability.css"

interface AviabilityProps { // Rinominata per corrispondere all'uso nel componente
    text: string; // Definizione del tipo per la prop text
    className?: string; // Opzionale: permette di passare classi CSS esterne
}

const Aviability: React.FC<AviabilityProps> = ({ text, className }) => (
    <div className={className}>{text}</div>
);

export default Aviability;
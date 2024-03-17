// CustomButton.tsx
import React from 'react';
import "./CustomButton.css"

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  className?: string; // Opzionale: permette di passare classi CSS esterne
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick, className }) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);


export default CustomButton;



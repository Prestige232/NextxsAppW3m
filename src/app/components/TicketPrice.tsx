import React from 'react';
import "./TicketPrice.css";


interface TicketProps {
  children: React.ReactNode;
}

const Ticket: React.FC<TicketProps> = ({ children }) => (
  <div className="ticket">{children}</div>
);

interface PriceProps {
  children: React.ReactNode;
}

const Price: React.FC<PriceProps> = ({ children }) => (
  <div className="price">{children}</div>
);

export { Ticket, Price };

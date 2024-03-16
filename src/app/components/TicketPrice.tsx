import React from 'react';

interface TicketProps {
  children: React.ReactNode;
}

const Ticket: React.FC<TicketProps> = ({ children }) => (
  <div>{children}</div>
);

interface PriceProps {
  children: React.ReactNode;
}

const Price: React.FC<PriceProps> = ({ children }) => (
  <div>{children}</div>
);

export { Ticket, Price };

import React, { ReactNode } from 'react';

interface GridRowProps {
  children: ReactNode;
}

const GridRow: React.FC<GridRowProps> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    {children}
  </div>
);

interface GridComponentProps {
  children: ReactNode;
}

const GridComponent: React.FC<GridComponentProps> = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
    {children}
  </div>
);

export { GridComponent, GridRow };

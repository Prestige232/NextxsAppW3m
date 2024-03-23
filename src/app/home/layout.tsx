// src/app/layout.tsx
import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default Layout; 
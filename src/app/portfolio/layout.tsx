import React from 'react';

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full max-w-screen-xl mx-auto overflow-auto">
      {children}
    </main>
  );
};

export default PortfolioLayout;

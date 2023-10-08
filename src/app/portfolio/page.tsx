import PortfolioHeader from '@/components/portfolio/layout/PortfolioHeader';
import { portfolioDetail } from '@/utils/portfolio';
import React from 'react';

const PortfolioPage = () => {
  return (
    <div>
      <PortfolioHeader portfolioList={portfolioDetail} selectedId={1} />
      <main>
        <aside></aside>
        <main></main>
      </main>
    </div>
  );
};

export default PortfolioPage;

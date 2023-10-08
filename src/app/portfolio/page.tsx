import PortfolioDetailBox from '@/components/portfolio/PortfolioDetailBox';
import PortfolioHeader from '@/components/portfolio/layout/PortfolioHeader';
import PortfolioMenu from '@/components/portfolio/layout/PortfolioMenu';
import { portfolioDetail } from '@/utils/portfolio';
import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="flex flex-col w-full h-screen max-w-screen-xl mx-auto overflow-auto">
      <PortfolioHeader portfolioList={portfolioDetail} selectedId={1} />
      <main className="flex flex-row flex-1">
        <PortfolioMenu />
        <PortfolioDetailBox />
      </main>
    </div>
  );
};

export default PortfolioPage;

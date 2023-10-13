import React from 'react';

import { portfolioDetail } from '@/utils/portfolio';
import PortfolioDetailBox from '@/components/portfolio/PortfolioDetailBox';
import PortfolioHeader from '@/components/portfolio/layout/PortfolioHeader';
import PortfolioMenu from '@/components/portfolio/layout/PortfolioMenu';

const page = ({ params }: { params: { slug: string } }) => {
  const selectedId = params.slug;

  const filteredPortfolio = portfolioDetail.filter(
    (portfolio) => portfolio.id === selectedId,
  );

  return (
    <div className="flex flex-col w-full h-screen max-w-screen-xl mx-auto overflow-auto">
      <PortfolioHeader selectedPortfolio={filteredPortfolio[0] || []} />
      <main className="flex flex-row flex-1 overflow-y-hidden">
        <PortfolioMenu
          portfolioList={portfolioDetail}
          selectedId={filteredPortfolio[0].id}
        />
        <PortfolioDetailBox selectedPortfolio={filteredPortfolio[0] || []} />
      </main>
    </div>
  );
};

export default page;

'use client';

import React, { FC, useEffect, useState } from 'react';

import { portfolioDetail } from '@/utils/portfolio';
import { isMobile } from '@/utils/common';

import PortfolioHeader from './layout/PortfolioHeader';
import PortfolioMenu from './layout/PortfolioMenu';
import PortfolioMobileDetailBox from './mobile/PortfolioMobileDetailBox';
import PortfolioMobileDetailImage from './mobile/PortfolioMobileDetailImage';
import PortfolioMobileDetailLinkBox from './mobile/PortfolioMobileDetailLinkBox';
import PortfolioMobileDetailMenu from './mobile/PortfolioMobileDetailMenu';
import PortfolioMobileDetailSubscribe from './mobile/PortfolioMobileDetailSubscribe';
import PortfolioDetailBox from './PortfolioDetailBox';

interface Props {
  selectedId: string;
}

const PortfolioBox: FC<Props> = ({ selectedId }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (isMobile()) {
      setIsMobileView(true);
    }
  }, [isMobile]);

  const filteredPortfolio = portfolioDetail.filter(
    (portfolio) => portfolio.id === selectedId,
  );

  if (isMobileView) {
    return (
      <main className="my-[100px]">
        <PortfolioMobileDetailMenu
          portfolioList={portfolioDetail}
          selectedId={filteredPortfolio[0].id}
        />
        <PortfolioMobileDetailLinkBox
          selectedPortfolio={filteredPortfolio[0] || []}
        />
        <PortfolioMobileDetailImage
          selectedPortfolio={filteredPortfolio[0] || []}
        />
        <PortfolioMobileDetailSubscribe
          selectedPortfolio={filteredPortfolio[0] || []}
        />
        <PortfolioMobileDetailBox
          selectedPortfolio={filteredPortfolio[0] || []}
        />
      </main>
    );
  }

  return (
    <main className="h-full">
      <PortfolioHeader selectedPortfolio={filteredPortfolio[0] || []} />
      <main className="flex flex-row flex-1 overflow-y-hidden">
        <PortfolioMenu
          portfolioList={portfolioDetail}
          selectedId={filteredPortfolio[0].id}
        />
        <PortfolioDetailBox selectedPortfolio={filteredPortfolio[0] || []} />
      </main>
    </main>
  );
};

export default PortfolioBox;

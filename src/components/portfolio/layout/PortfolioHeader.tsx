import { IHomePortfolioDetail } from '@/apis/Home.type';
import React, { FC } from 'react';

interface Props {
  portfolioList: IHomePortfolioDetail[];
  selectedId: number;
}

const PortfolioHeader: FC<Props> = ({ portfolioList, selectedId }) => {
  const filteredPortfolio = portfolioList.filter(
    (portfolio) => portfolio.id === selectedId,
  );
  return (
    <header className="flex justify-end w-full ">
      <div className="w-[60%] mr-6 ">
        <div className="flex w-full h-0.5">
          {portfolioList.map((portfolio) => {
            return (
              <div
                key={`portfolio-header-${portfolio.id}`}
                className={`flex-1 h-full ${
                  portfolio.id === selectedId ? 'bg-black' : 'bg-lightGray'
                }`}
              />
            );
          })}
        </div>
        <h2 className="mt-10 whitespace-break-spaces">
          {filteredPortfolio[0]?.detail}
        </h2>
      </div>
    </header>
  );
};

export default PortfolioHeader;

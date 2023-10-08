import { IHomePortfolioDetail, PortfolioIdType } from '@/apis/Home.type';
import React, { FC } from 'react';

interface Props {
  portfolioList: IHomePortfolioDetail[];
  selectedId: PortfolioIdType;
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioHeader: FC<Props> = ({
  portfolioList,
  selectedId,
  selectedPortfolio,
}) => {
  return (
    <header className="flex justify-end w-full ">
      <div className="w-[70%] pr-6 ">
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
          {selectedPortfolio.detail}
        </h2>
      </div>
    </header>
  );
};

export default PortfolioHeader;

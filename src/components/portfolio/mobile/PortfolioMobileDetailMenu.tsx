'use client';

import Link from 'next/link';
import React, { FC } from 'react';

import { IHomePortfolioDetail, PortfolioIdType } from '@/apis/Home.type';

interface Props {
  portfolioList: IHomePortfolioDetail[];
  selectedId: PortfolioIdType;
}

const PortfolioMobileDetailMenu: FC<Props> = ({
  portfolioList,
  selectedId,
}) => {
  return (
    <div className="flex flex-row px-4 pb-4 overflow-x-auto scrollbar-hide">
      {portfolioList.map((portfolio, index) => {
        return (
          <Link key={`portfolio-menu-${portfolio.id}`} href={portfolio.link}>
            <div
              key={`portfolio-menu-${portfolio.id}`}
              className={`cursor-pointer text-[0.8rem] ${
                portfolio.id === selectedId
                  ? 'text-black border-b-2'
                  : 'text-darkGray '
              } hover:text-black hover:border-b-2 font-bold
              ${portfolioList.length - 1 !== index && 'mr-4'}
              whitespace-nowrap`}
            >
              {portfolio.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PortfolioMobileDetailMenu;

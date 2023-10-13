import { IHomePortfolioDetail, PortfolioIdType } from '@/apis/Home.type';
import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
  portfolioList: IHomePortfolioDetail[];
  selectedId: PortfolioIdType;
}

const PortfolioMenu: FC<Props> = ({ portfolioList, selectedId }) => {
  return (
    <aside className="flex flex-col justify-end flex-1 h-full p-5">
      <div className="flex flex-col pt-5 h-portfolioBottom">
        {portfolioList.map((portfolio) => {
          return (
            <Link key={`portfolio-menu-${portfolio.id}`} href={portfolio.link}>
              <div
                key={`portfolio-menu-${portfolio.id}`}
                className={`py-2 cursor-pointer text ${
                  portfolio.id === selectedId ? 'text-black' : 'text-darkGray'
                } hover:text-black font-bold`}
              >
                {portfolio.title}
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default PortfolioMenu;

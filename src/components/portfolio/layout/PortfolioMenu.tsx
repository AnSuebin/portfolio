'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

import { IHomePortfolioDetail, PortfolioIdType } from '@/apis/Home.type';

interface Props {
  portfolioList: IHomePortfolioDetail[];
  selectedId: PortfolioIdType;
}

const PortfolioMenu: FC<Props> = ({ portfolioList, selectedId }) => {
  return (
    <aside className="flex flex-col flex-1 h-full px-5">
      <div className="flex flex-col h-portfolioBottom">
        {portfolioList.map((portfolio) => {
          return (
            <Link key={`portfolio-menu-${portfolio.id}`} href={portfolio.link}>
              <motion.div
                key={`portfolio-menu-${portfolio.id}`}
                className={`py-2 cursor-pointer text ${
                  portfolio.id === selectedId ? 'text-black' : 'text-darkGray'
                } hover:text-black font-bold`}
              >
                {portfolio.title}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default PortfolioMenu;

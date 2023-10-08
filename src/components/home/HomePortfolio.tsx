import React from 'react';
import HomePortfolioBox from './portfolio/HomePortfolioBox';
import { portfolioList } from '@/utils/portfolio';

const HomePortfolio = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex px-[200px] py-[180px] gap-[20px] flex-row h-full w-full">
        <section className="flex flex-col flex-1 h-full px-5 py-10 border font-primary">
          portfolio
        </section>
        {portfolioList.map((portfolio) => (
          <HomePortfolioBox
            id={portfolio.id}
            type={portfolio.type}
            title={portfolio.title}
            subtitle={portfolio.subtitle}
            link={portfolio.link}
          />
        ))}
      </section>
    </main>
  );
};

export default HomePortfolio;

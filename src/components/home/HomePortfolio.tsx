'use client';

import React from 'react';
import HomePortfolioBox from './portfolio/HomePortfolioBox';
import { portfolioList } from '@/utils/portfolio';
import useScrollToObserver from '@/hooks/useScrolltoObserver';

const HomePortfolio = () => {
  const { scrollRef, viewRef } = useScrollToObserver();

  return (
    <main className="flex items-center justify-center h-screen" ref={scrollRef}>
      <section className="flex px-[50px] py-[180px] gap-[20px] flex-row h-full w-full">
        <section
          className="flex flex-col flex-1 h-full px-5 py-10 border font-primary"
          ref={viewRef}
        >
          portfolio
        </section>

        {portfolioList.map((portfolio, index) => (
          <HomePortfolioBox
            key={`Home-portfolio-block-${portfolio.id}`}
            numberId={index + 1}
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

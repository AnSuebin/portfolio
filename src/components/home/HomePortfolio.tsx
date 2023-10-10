'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import HomePortfolioBox from './portfolio/HomePortfolioBox';
import { portfolioList } from '@/utils/portfolio';
import { useInView } from 'react-intersection-observer';

const HomePortfolio = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (!!scrollRef.current && inView) {
      scrollRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    }
  }, [inView, scrollRef]);

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

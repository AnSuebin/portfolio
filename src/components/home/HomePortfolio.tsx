'use client';

import { motion } from 'framer-motion';
import React from 'react';

import { portfolioList } from '@/utils/portfolio';
import useScrollToObserver from '@/hooks/useScrollToObserver';

import HomePortfolioBox from './portfolio/HomePortfolioBox';

const HomePortfolio = () => {
  const { scrollRef, viewRef, inView } = useScrollToObserver();
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className="flex items-center justify-center h-screen" ref={scrollRef}>
      <motion.section
        className="flex px-[50px] py-[180px] gap-[20px] flex-row h-full w-full"
        ref={viewRef}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <section className="flex flex-col flex-1 h-full px-5 py-10 border font-primary">
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
      </motion.section>
    </main>
  );
};

export default HomePortfolio;

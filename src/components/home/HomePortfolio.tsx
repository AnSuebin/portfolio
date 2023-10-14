'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

import { portfolioList } from '@/utils/portfolio';

import HomePortfolioBox from './portfolio/HomePortfolioBox';

const HomePortfolio = () => {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <motion.section
        className="flex px-[50px] py-[180px] gap-[20px] flex-col lg:flex-row lg:h-full w-full "
        ref={viewRef}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        <section className="flex flex-col flex-1 px-5 py-5 border lg:py-10 h-100px lg:h-full font-primary ">
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

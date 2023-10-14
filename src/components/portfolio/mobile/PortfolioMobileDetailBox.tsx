'use client';

import { motion } from 'framer-motion';
import React, { FC } from 'react';

import { IHomePortfolioDetail } from '@/apis/Home.type';
import Carousel from '@/components/commons/Carousel';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioMobileDetailBox: FC<Props> = ({ selectedPortfolio }) => {
  return (
    <main className="flex px-4 mb-5">
      <section className="flex flex-col gap-6 pt-5 h-portfolioBottom">
        <div className="flex-1">
          <motion.h2 className="text-2xl font-bold">Works</motion.h2>
          <ul className="mt-3 text-[0.9rem]">
            {selectedPortfolio.works.map((works, index) => (
              <motion.ol key={`portfolio-detail-works-${index}`}>
                • {works}
              </motion.ol>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <motion.h2 className="text-2xl font-bold">Tech Stack</motion.h2>
          <ul className="mt-4 text-[0.9rem]">
            {selectedPortfolio.stack.map((stack, index) => (
              <motion.ol key={`portfolio-detail-stack-${index}`}>
                • {stack}
              </motion.ol>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PortfolioMobileDetailBox;

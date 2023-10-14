'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { IHomePortfolioDetail } from '@/apis/Home.type';
import Carousel from '@/components/commons/Carousel';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioMobileDetailBox: FC<Props> = ({ selectedPortfolio }) => {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
  });

  const textVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex px-4 mb-5" ref={viewRef}>
      <section className="flex flex-col gap-6 pt-5 h-portfolioBottom">
        <div className="flex-1">
          <motion.h2
            className="text-2xl font-bold"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Works
          </motion.h2>
          <ul className="mt-3 text-sm">
            {selectedPortfolio.works.map((works, index) => (
              <motion.ol
                key={`portfolio-detail-works-${index}`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={textVariants}
                transition={{ delay: (index + 1) * 0.2 }}
              >
                • {works}
              </motion.ol>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <motion.h2
            className="text-2xl font-bold"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            Tech Stack
          </motion.h2>
          <ul className="mt-4 text-sm">
            {selectedPortfolio.stack.map((stack, index) => (
              <motion.ol
                key={`portfolio-detail-stack-${index}`}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={textVariants}
                transition={{ delay: (index + 1) * 0.2 }}
              >
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

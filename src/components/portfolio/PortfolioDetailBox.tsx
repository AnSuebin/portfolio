'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import image from 'public/images/portfolio/revisit/revisit1.png';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { IHomePortfolioDetail } from '@/apis/Home.type';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioDetailBox: FC<Props> = ({ selectedPortfolio }) => {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
  });

  const textVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex flex-col w-[70%] h-full py-5" ref={viewRef}>
      <section className="flex items-center justify-center flex-1 w-full ">
        {/* <Image alt={selectedPortfolio.title} src={image} fill /> */}
      </section>
      <section className="flex pt-5 h-portfolioBottom">
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
          <ul className="mt-8 text-sm">
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
          <ul className="mt-8 text-sm">
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

export default PortfolioDetailBox;

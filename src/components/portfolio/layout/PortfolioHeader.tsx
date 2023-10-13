'use client';

import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';

import { IHomePortfolioDetail } from '@/apis/Home.type';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioHeader: FC<Props> = ({ selectedPortfolio }) => {
  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
  });

  const textVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
  };

  const splitLineDetail = selectedPortfolio.detail.split('\n');

  return (
    <header className="flex justify-end w-full mt-[100px]" ref={viewRef}>
      <div className="w-[70%] mb-5">
        {splitLineDetail.map((detail, index) => (
          <motion.h2
            key={`portfolio-detail-line-${index}`}
            className="text-black "
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ delay: index * 0.2 }}
          >
            {detail}
          </motion.h2>
        ))}
      </div>
    </header>
  );
};

export default PortfolioHeader;

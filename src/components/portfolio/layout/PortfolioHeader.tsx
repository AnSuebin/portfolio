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
    <header className="flex justify-end w-full mt-[100px] h-20 " ref={viewRef}>
      <div className="w-[70%] mb-5 flex gap-10 ">
        <div className="w-[200px]">
          <h3 className=" font-primary text-primary text-mobileSubTitle">
            {selectedPortfolio.title}
          </h3>
          <p className="leading-0 text-darkGray">{`${selectedPortfolio.startDate} ~ ${selectedPortfolio.endDate}`}</p>
        </div>
        <div className="flex-1">
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
      </div>
    </header>
  );
};

export default PortfolioHeader;

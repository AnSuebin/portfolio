'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { isMobile } from '@/utils/common';

import profileImage from '../../../public/images/profile.png';

const HomeSummary = () => {
  const [isMobileSize, setMobileSize] = useState(false);

  useEffect(() => {
    setMobileSize(!!isMobile());
  }, [isMobile]);

  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main
      className="flex items-center justify-center lg:h-screen mt-[180px] lg:mt-0"
      ref={viewRef}
    >
      <section className="flex flex-col items-center justify-center lg:justify-between px-[50px] lg:px-[100px] lg:py-[180px] text-center lg:text-start lg:h-full w-full lg:flex-row">
        <motion.div
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={imageVariants}
          transition={{ duration: 1 }}
        >
          <Image src={profileImage} alt="profile" width={600} height={600} />
        </motion.div>
        <div className="mt-10 lg:ml-10 lg:mt-0 ">
          <motion.h3
            className="mb-10 text-mobileSubTitle lg:text-subTitle font-primary whitespace-break-spaces "
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            {`새로운 세상을\n여는 개발자 안수빈`}
          </motion.h3>

          <motion.article
            className=" lg:text-mobileSubTitle"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            안녕하세요.<strong> 프론트엔드 개발자 안수빈</strong>입니다.
            <br />
            리트리버 견종은 시각 안내 도우미를 꿈꾸는 견종입니다.
            <br />
            <br />
            <strong>
              저 또한 누군가의 새로운 세상을 열어주는 <br /> 프론트엔드 개발자를
              꿈꾸며 성장합니다.
            </strong>
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default HomeSummary;

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
    <main className="flex items-center justify-center h-screen " ref={viewRef}>
      <section className="flex flex-col items-center justify-center lg:justify-between px-[50px] lg:px-[100px] lg:py-[180px] text-center lg:text-start h-full w-full lg:flex-row">
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
            className="mb-10 text-mobileSubTitle lg:text-subTitle font-primary whitespace-break-spaces lg:whitespace-normal"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            {isMobileSize
              ? `리트리버\n프론트엔드 개발자\n안수빈`
              : `리트리버 프론트엔드 개발자 _ 안수빈`}
          </motion.h3>

          <motion.article
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            리트리버는 시각 안내 도우미를 꿈꾸는 견종입니다. <br />저 또한
            누군가의 따뜻한 눈이 되는 프론트엔드 개발자를 꿈꾸며 성장합니다.
            <br />
            <br />
            책임감 있게 구현합니다. <br />
            모두가 사용하기 위한 코드란 생각으로 구현하고, 누군가에게 꼭 필요한
            기능이란 사명으로 제작합니다.
            <br />
            <br />
            따뜻하게 교류하려 노력합니다. <br />
            같은 말도 따뜻하게 한다면 관계도, 결과도 더욱 좋을 것이라 믿습니다.
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default HomeSummary;

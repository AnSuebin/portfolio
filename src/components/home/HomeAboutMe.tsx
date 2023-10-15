'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { isMobile } from '@/utils/common';

const HomeAboutMe = () => {
  const [isMobileSize, setMobileSize] = useState(false);

  useEffect(() => {
    setMobileSize(!!isMobile());
  }, [isMobile]);

  const { ref: viewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { opacity: 0, y: '50%' },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex items-center justify-center h-screen " ref={viewRef}>
      <section className="flex flex-col items-center justify-center lg:justify-between px-[50px] lg:px-[100px] lg:py-[180px] text-center lg:text-start h-full w-full lg:flex-row">
        <div className="mt-10 lg:ml-10 lg:mt-0 ">
          <motion.h3
            className="mb-10 text-mobileSubTitle lg:text-subTitle font-primary whitespace-break-spaces lg:whitespace-normal"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            About Me
          </motion.h3>

          <motion.article
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <strong>
              저는 React & Typescript 기반의 프론트엔드 개발자로, 웹 업무
              대부분을 담당하고 있습니다.
            </strong>
            <br />
            <br />
            <strong>비즈니스의 성장이 곧 제 성장이라 생각합니다.</strong>
            <br /> 따라서 사내에서 MVP를 구현할 당시, 필요한 기능을 도입하는 데
            필요한 기술들을 빠르게 학습하였고,
            <br /> toss billing•구글 애널리틱스•PWA 등 새로운 기능을 도입할 수
            있었습니다.
            <br />
            <br />
            <strong>저만의 3가지 협업 원칙을 추구합니다.</strong>
            <br />
            ’원활한’ 협업은 비즈니스의 성장에 중요한 요소라 생각합니다.
            <br />
            이를 위해 1. 대화 전 주제에 관한 생각을 정리하고 2. 상대방의 입장을
            한 번 더 생각하며
            <br /> 3. 감정보다 주제에 집중하는{' '}
            <strong>저만의 3가지 협업 원칙</strong>을 지키려 노력합니다.
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default HomeAboutMe;

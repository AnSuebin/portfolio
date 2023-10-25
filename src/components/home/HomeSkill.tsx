'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { isMobile } from '@/utils/common';

const HomeSkill = () => {
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
    <main
      className="flex items-center justify-center mt-[180px] lg:mt-0 lg:h-screen "
      ref={viewRef}
    >
      <section className="flex flex-col items-center justify-center lg:justify-between px-[50px] lg:px-[100px] lg:py-[180px] lg:h-full w-full lg:flex-row">
        <div className="mt-10 lg:ml-10 lg:mt-0 ">
          <motion.h3
            className="mb-10 text-mobileSubTitle lg:text-subTitle font-primary whitespace-break-spaces lg:whitespace-normal"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3 }}
          >
            Skills
          </motion.h3>

          <motion.article
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            작은 노력이 모여 큰 결과를 만들어 낸다고 믿습니다. <br />
            미숙한 분야라도 적극적으로 임하고, 최선의 결과를 도출하려고
            노력합니다.
          </motion.article>

          <motion.article
            className="mt-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="py-0.5 px-2 font-extrabold text-[#fff] bg-darkGray">
              Communication
            </h3>
            <p className="mt-1">
              • 동료가 좋은 의사 결정자라 생각합니다. <br />
              • 아’ 다르고 ‘어’ 다름을 인지하고, 정확하며 부드럽게 대화하려
              노력합니다.
              <br />• 지라, 노션, 피그마, 슬랙을 사용하여 협업하는 것에
              능숙합니다.
            </p>
          </motion.article>
          <motion.article
            className="mt-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="py-0.5 px-2 font-extrabold text-[#fff] bg-darkGray">
              Web
            </h3>
            <p className="mt-1">
              • Internet Explorer, safari 등 브라우저를 지원할 수 있습니다.{' '}
              <br />• 다양한 OS 최적화를 지원할 수 있습니다.
            </p>
          </motion.article>
          <motion.article
            className="mt-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="py-0.5 px-2 font-extrabold text-[#fff] bg-darkGray">
              React & TypeScript
            </h3>
            <p className="mt-1">
              • React와 TypeScript를 사용하는 것에 능숙합니다. <br />• React
              hooks를 편안하게 사용하고, hook을 이용해 공통 로직을 모듈화해
              사용할 수 있습니다.
            </p>
          </motion.article>
          <motion.article
            className="mt-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="py-0.5 px-2 font-extrabold text-[#fff] bg-darkGray">
              Next.js
            </h3>
            <p className="mt-1">
              • 포트폴리오를 Next.js 13으로 제작하였습니다. <br />• Next.js 12로
              제작된 웹사이트의 유지보수를 담당하고 있습니다.
            </p>
          </motion.article>
          <motion.article
            className="mt-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={textVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h3 className="py-0.5 px-2 font-extrabold text-[#fff] bg-darkGray">
              DevOps
            </h3>
            <p className="mt-1">
              • AWS S3, CloudFront, Lambda edge를 이용해 배포할 수 있습니다.{' '}
              <br />• Git Actions으로 CI를 구현할 수 있습니다.
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default HomeSkill;

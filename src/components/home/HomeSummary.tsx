'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import profileImage from '../../../public/images/profile.png';
import { useInView } from 'react-intersection-observer';

const HomeSummary = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [viewRef, inView] = useInView();

  useEffect(() => {
    if (!!scrollRef.current && inView) {
      scrollRef.current.scrollIntoView({
        behavior: 'auto',
        block: 'start',
      });
    }
  }, [inView, scrollRef]);

  return (
    <main className="flex items-center justify-center h-screen" ref={scrollRef}>
      <section className="flex items-center justify-between px-[100px] py-[180px] h-full w-full">
        <Image src={profileImage} width={400} height={400} alt="profile" />
        <div className="ml-10">
          <h3 className="mb-10 text-2xl font-primary" ref={viewRef}>
            리트리버 프론트엔드 개발자_ 안수빈
          </h3>

          <article>
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
          </article>
        </div>
      </section>
    </main>
  );
};

export default HomeSummary;

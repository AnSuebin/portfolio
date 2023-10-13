'use client';

import React from 'react';
// import { TypingMultiline } from 'react-kr-typing-anim';

const HomeIntro = () => {
  return (
    <div className="bg-repeat bg-pattern">
      <main className="flex items-center justify-center h-screen">
        <h1 className="leading-normal font-primary">
          리트리버를 닮은
          <br />
          프론트엔드 개발자
          <br />
          안수빈입니다.
          {/* <TypingMultiline
            strs={`리트리버를 닮은
            프론트엔드 개발자
            안수빈입니다.`}
          /> */}
        </h1>
      </main>
    </div>
  );
};

export default HomeIntro;

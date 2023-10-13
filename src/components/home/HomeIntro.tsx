'use client';

import React from 'react';

import TypingText from '../commons/TypingText';

const HomeIntro = () => {
  return (
    <div className="bg-repeat bg-pattern">
      <main className="flex items-center justify-center h-screen">
        <h1 className="leading-normal w-fit font-primary">
          <TypingText
            typingText={`리트리버를 닮은\n프론트엔드 개발자\n안수빈입니다.`}
            styles="whitespace-break-spaces"
            intervalTime={200}
          />
        </h1>
      </main>
    </div>
  );
};

export default HomeIntro;

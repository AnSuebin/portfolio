import Image from 'next/image';
import image from 'public/images/portfolio/revisit/revisit1.png';
import React, { FC } from 'react';

import { IHomePortfolioDetail } from '@/apis/Home.type';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioDetailBox: FC<Props> = ({ selectedPortfolio }) => {
  return (
    <main className="flex flex-col w-[70%] h-full py-5 ">
      <section className="flex items-center justify-center flex-1 w-full ">
        {/* <Image alt={selectedPortfolio.title} src={image} fill /> */}
      </section>
      <section className="flex pt-5 h-portfolioBottom">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Works</h2>
          <ul className="mt-8 text-sm">
            {selectedPortfolio.works.map((works, index) => (
              <ol key={`portfolio-detail-works-${index}`}>• {works}</ol>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <ul className="mt-8 text-sm">
            {selectedPortfolio.stack.map((stack, index) => (
              <ol key={`portfolio-detail-stack-${index}`}>• {stack}</ol>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailBox;

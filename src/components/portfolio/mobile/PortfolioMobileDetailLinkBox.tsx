import { MotionConfig } from 'framer-motion';
import Link from 'next/link';
import React, { FC } from 'react';

import { IHomePortfolioDetail } from '@/apis/Home.type';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioMobileDetailLinkBox: FC<Props> = ({ selectedPortfolio }) => {
  return (
    <header className="px-4 mt-5">
      <h3 className="font-primary text-[1.2rem]">{selectedPortfolio.title}</h3>
      <p className="leading-0 text-darkGray">{`${selectedPortfolio.startDate} ~ ${selectedPortfolio.endDate}`}</p>
      <div className="flex justify-end w-full mt-6 ">
        {selectedPortfolio.site?.map((site) => {
          return (
            <Link key={`portfolio-menu-site-${site.title}`} href={site.link}>
              <div
                className={` px-3 cursor-pointer text-[0.9rem] text-[#fff] rounded-full hover:bg-black bg-darkGray ml-2`}
              >
                {`${site.title}`}
              </div>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default PortfolioMobileDetailLinkBox;

import { IHomePortfolioDetail } from '@/apis/Home.type';
import React, { FC } from 'react';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioHeader: FC<Props> = ({ selectedPortfolio }) => {
  return (
    <header className="flex justify-end w-full mt-[100px]">
      <div className="w-[70%]">
        <h2 className="mb-5 text-black whitespace-break-spaces">
          {selectedPortfolio.detail}
        </h2>
      </div>
    </header>
  );
};

export default PortfolioHeader;

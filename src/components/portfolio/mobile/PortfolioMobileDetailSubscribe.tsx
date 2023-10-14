import React, { FC } from 'react';

import { IHomePortfolioDetail } from '@/apis/Home.type';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioMobileDetailSubscribe: FC<Props> = ({ selectedPortfolio }) => {
  const splitLineDetail = selectedPortfolio.detail.split('\n');

  return (
    <div className="px-4 mt-10">
      {splitLineDetail.map((detail, index) => (
        <h2
          key={`portfolio-detail-line-${index}`}
          className="text-black text-[0.9rem] "
        >
          {detail}
        </h2>
      ))}
    </div>
  );
};

export default PortfolioMobileDetailSubscribe;

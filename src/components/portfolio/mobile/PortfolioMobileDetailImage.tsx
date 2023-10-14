import React, { FC } from 'react';

import { IHomePortfolioDetail } from '@/apis/Home.type';
import Carousel from '@/components/commons/Carousel';

interface Props {
  selectedPortfolio: IHomePortfolioDetail;
}

const PortfolioMobileDetailImage: FC<Props> = ({ selectedPortfolio }) => {
  return (
    <section className="relative flex justify-center flex-1 w-full">
      <Carousel
        type={selectedPortfolio.id}
        images={selectedPortfolio.images}
        isMobile
      />
    </section>
  );
};

export default PortfolioMobileDetailImage;

import Image from 'next/image';
import React, { FC } from 'react';

import { PortfolioIdType } from '@/apis/Home.type';

interface Props {
  type: PortfolioIdType;
  images: string[];
  imageAlt: string;
}

const PortfolioDetailImage: FC<Props> = ({ type, imageAlt, images }) => {
  return (
    <>
      {images.map((image) => {
        <Image
          key={`protfolio-detail-image-${image}`}
          alt={imageAlt}
          src={require(`public/images/portfolio/${type}/${image}`)}
          fill
        />;
      })}
    </>
  );
};

export default PortfolioDetailImage;

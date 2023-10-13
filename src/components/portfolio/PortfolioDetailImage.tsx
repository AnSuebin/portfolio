import React, { FC } from 'react';
import revisitImage1 from 'public/images/portfolio/revisit/revisit1.png';
import revisitImage2 from 'public/images/portfolio/revisit/revisit2.png';
import revisitImage3 from 'public/images/portfolio/revisit/revisit3.png';
import revisitImage4 from 'public/images/portfolio/revisit/revisit4.png';
import { PortfolioIdType } from '@/apis/Home.type';
import Image from 'next/image';

interface Props {
  type: PortfolioIdType;
  title: string;
  imageAlt: string;
}

const PortfolioDetailImage: FC<Props> = ({ type, title, imageAlt }) => {
  const imageList = {
    revisit: [revisitImage1, revisitImage2, revisitImage3, revisitImage4],
    fff: [],
    bank: [],
    tamnaye: [],
  };

  return <>{/* <Image alt={imageAlt} src={image} fill /> */}</>;
};

export default PortfolioDetailImage;

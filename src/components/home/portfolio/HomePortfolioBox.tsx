import Link from 'next/link';
import React, { FC } from 'react';

import { HomePortfolioType, PortfolioIdType } from '@/apis/Home.type';

interface Props {
  numberId: number;
  id: PortfolioIdType;
  type: HomePortfolioType;
  title: string;
  subtitle: string;
  link: string;
}

const HomePortfolioBox: FC<Props> = ({
  numberId,
  id,
  type,
  title,
  subtitle,
  link,
}) => {
  return (
    <Link
      href={link}
      className="text-lightGray flex  flex-row lg:flex-col flex-1 h-100px lg:h-full px-5 py-5 lg:py-10 border cursor-pointer hover:text-[black]"
    >
      <div>
        <h2 className="text-3xl font-primary">0{numberId}</h2>
        <p className=" font-Pretendard">{type}</p>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h3 className="text-lg font-bold whitespace-break-spaces">{title}</h3>
        <p className="text-sm whitespace-break-spaces">{subtitle}</p>
      </div>
    </Link>
  );
};

export default HomePortfolioBox;

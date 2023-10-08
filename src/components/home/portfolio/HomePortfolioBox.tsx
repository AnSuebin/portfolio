import Link from 'next/link';
import React, { FC } from 'react';

const HomePortfolioBox: FC<IHomePortfolio> = ({
  id,
  type,
  title,
  subtitle,
  link,
}) => {
  return (
    <Link href={link}>
      <section className="text-lightGray  flex flex-col flex-1 h-full px-5 py-10 border cursor-pointer hover:text-[black]">
        <div>
          <h2 className="text-3xl font-primary ">0{id}</h2>
          <p className=" font-Pretendard">{type}</p>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </section>
    </Link>
  );
};

export default HomePortfolioBox;

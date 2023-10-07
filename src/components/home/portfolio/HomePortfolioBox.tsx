import React, { FC } from 'react';

interface Props {
  id: number;
  type: string;
  title: string;
  subtitle: string;
}

const HomePortfolioBox: FC<Props> = ({ id, type, title, subtitle }) => {
  return (
    <section className="flex flex-col flex-1 h-full px-5 py-10 border">
      <div>
        <h2 className="text-3xl font-primary">0{id}</h2>
        <p className="font-Pretendard ">{type}</p>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default HomePortfolioBox;

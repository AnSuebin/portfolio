import React from 'react';
import HomePortfolioBox from './portfolio/HomePortfolioBox';

const HomePortfolio = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="flex px-[200px] py-[180px] gap-[20px] flex-row h-full w-full">
        <section className="flex flex-col flex-1 h-full px-5 py-10 border font-primary">
          portfolio
        </section>
        <HomePortfolioBox
          id={1}
          type="work"
          title="모션랩스"
          subtitle="motion labs"
        />
        <HomePortfolioBox
          id={1}
          type="work"
          title="모션랩스"
          subtitle="motion labs"
        />
        <HomePortfolioBox
          id={1}
          type="work"
          title="모션랩스"
          subtitle="motion labs"
        />
        <HomePortfolioBox
          id={1}
          type="work"
          title="모션랩스"
          subtitle="motion labs"
        />
      </section>
    </main>
  );
};

export default HomePortfolio;

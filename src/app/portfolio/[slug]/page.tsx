import React from 'react';

import PortfolioBox from '@/components/portfolio/PortfolioBox';

const PortfolioDetailPage = ({ params }: { params: { slug: string } }) => {
  const selectedId = params.slug;
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto overflow-auto lg:h-screen lg:overflow-y-hidden">
      <PortfolioBox selectedId={selectedId} />
    </div>
  );
};

export default PortfolioDetailPage;

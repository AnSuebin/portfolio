import React from 'react';

import PortfolioBox from '@/components/portfolio/PortfolioBox';

const PortfolioDetailPage = ({ params }: { params: { slug: string } }) => {
  const selectedId = params.slug;
  return (
    <div className="flex flex-col w-full h-screen max-w-screen-xl mx-auto overflow-auto">
      <PortfolioBox selectedId={selectedId} />
    </div>
  );
};

export default PortfolioDetailPage;

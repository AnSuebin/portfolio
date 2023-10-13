'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const PortfolioPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('portfolio/revisit');
  }, []);

  return <></>;
};

export default PortfolioPage;

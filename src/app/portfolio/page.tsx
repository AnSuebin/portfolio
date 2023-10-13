'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { PortfolioIdType } from '@/apis/Home.type';
import { portfolioDetail } from '@/utils/portfolio';
import PortfolioDetailBox from '@/components/portfolio/PortfolioDetailBox';
import PortfolioHeader from '@/components/portfolio/layout/PortfolioHeader';
import PortfolioMenu from '@/components/portfolio/layout/PortfolioMenu';

const PortfolioPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('portfolio/revisit');
  }, []);

  return <></>;
};

export default PortfolioPage;

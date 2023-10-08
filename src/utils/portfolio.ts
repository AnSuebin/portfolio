import { IHomePortfolio, IHomePortfolioDetail } from '@/apis/Home.type';

export const portfolioList: IHomePortfolio[] = [
  {
    id: 1,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
  },
  {
    id: 2,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
  },
  {
    id: 3,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
  },
];

export const portfolioDetail: IHomePortfolioDetail[] = [
  {
    id: 1,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
    detail:
      '병원 진료 토탈 솔루션 SaaS 프로그램 입니다.\nMVP 제작에 참여하였고, 유지보수를 담당하고 있습니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      'MVP 내 병원 진료 메인 페이지 제작 및 유지보수',
      'Toss Billing 활용, 정기 구독 결제 및 관리 페이지 구현',
      'PWA 활용, 테블릿 설치 프로그램 구현',
      '구글 애널리틱스 구현',
      '배포 (Cloud Front, S3, Lambda edge, Git Actions)',
    ],
    stack: [
      'TypeScript, React, Styled-components, React-query, Zustand',
      'S3, Cloud Front, Lambda Edge, Git Actions',
    ],
  },
  {
    id: 2,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
    detail:
      '병원 진료 토탈 솔루션 SaaS 프로그램 입니다.\nMVP 제작에 참여하였고, 유지보수를 담당하고 있습니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      'MVP 내 병원 진료 메인 페이지 제작 및 유지보수',
      'Toss Billing 활용, 정기 구독 결제 및 관리 페이지 구현',
      'PWA 활용, 테블릿 설치 프로그램 구현',
      '구글 애널리틱스 구현',
      '배포 (Cloud Front, S3, Lambda edge, Git Actions)',
    ],
    stack: [
      'TypeScript, React, Styled-components, React-query, Zustand',
      'S3, Cloud Front, Lambda Edge, Git Actions',
    ],
  },
  {
    id: 3,
    type: 'work',
    title: '모션랩스',
    subtitle: 'motion labs',
    link: 'portfolio/revisit',
    detail:
      '병원 진료 토탈 솔루션 SaaS 프로그램 입니다.\nMVP 제작에 참여하였고, 유지보수를 담당하고 있습니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      'MVP 내 병원 진료 메인 페이지 제작 및 유지보수',
      'Toss Billing 활용, 정기 구독 결제 및 관리 페이지 구현',
      'PWA 활용, 테블릿 설치 프로그램 구현',
      '구글 애널리틱스 구현',
      '배포 (Cloud Front, S3, Lambda edge, Git Actions)',
    ],
    stack: [
      'TypeScript, React, Styled-components, React-query, Zustand',
      'S3, Cloud Front, Lambda Edge, Git Actions',
    ],
  },
];

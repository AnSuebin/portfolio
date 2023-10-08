import { IHomePortfolio, IHomePortfolioDetail } from '@/apis/Home.type';

export const portfolioList: IHomePortfolio[] = [
  {
    id: 'revisit',
    type: 'work',
    title: '리비짓',
    subtitle: '모션랩스',
    link: 'portfolio/revisit',
  },
  {
    id: 'fff',
    type: 'experience',
    title: '폼폼폼',
    subtitle: '항해99 10기',
    link: 'portfolio/fff',
  },
  {
    id: 'bank',
    type: 'experience',
    title: '국민은행 온보딩',
    subtitle: 'Numble',
    link: 'portfolio/bank',
  },
  {
    id: 'tamnaye',
    type: 'experience',
    title: '탐나는 예약 시스템',
    subtitle: '제주 더큰내일센터',
    link: 'portfolio/tamnaye',
  },
];

export const portfolioDetail: IHomePortfolioDetail[] = [
  {
    id: 'revisit',
    type: 'work',
    title: 'revisit',
    subtitle: '모션랩스',
    link: 'revisit',
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
    id: 'fff',
    type: 'experience',
    title: '폼폼폼',
    subtitle: '항해99 10기',
    link: 'fff',
    detail:
      '기존 설문조사 사이트의 사용성을 UI•UX적으로 개선한 프로젝트입니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      '부리더 담당',
      '메인페이지, 제작페이지, 마이페이지, 설문 응답 페이지, 통계 페이지 구현',
      '배포 (Cloud Front, S3)',
    ],
    stack: [
      'React, Styled-components, Redux-toolkit',
      'Apex-chart, React-beautiful-dnd',
      'S3, Cloud Front',
    ],
  },
  {
    id: 'bank',
    type: 'experience',
    title: '국민은행 액티브 시니어 타겟 온보딩 페이지',
    subtitle: 'Numble',
    link: 'bank',
    detail:
      '액티브 시니어 타켓을 대상으로, 은행 온보딩 페이지를 제작한 프로젝트입니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      '디자이너, 기획자와 협업',
      '1인 개발',
      'Git Actions 활용 CI 구현',
      'TypeScript 마이그레이션',
      '프로젝트 기획 단계, 인터렉티브 버튼 모음 제작 ( 스위치 / 드래그 앤 드롭 / 캐러셀 )',
    ],
    stack: ['React, TypeScript, Styled-components', 'Git Pages, Git Actions'],
  },
  {
    id: 'tamnaye',
    type: 'experience',
    title: '탐나는 예약 시스템',
    subtitle: '제주 더큰내일센터',
    link: 'tamnaye',
    detail:
      '센터에서 회의실 예약 시, 수기 작성 시스템의 불편함을 개선하고자 기획한 프로젝트입니다.',
    startDate: '2023.04.01',
    endDate: '현재',
    role: 'Frontend Developer',
    works: [
      '메인 페이지 제작',
      '어드민 페이지 내 전체 수정 페이지 제작',
      '모바일 반응형 구현',
    ],
    stack: ['React'],
  },
];

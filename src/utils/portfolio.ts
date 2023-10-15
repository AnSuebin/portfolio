import { IHomePortfolio, IHomePortfolioDetail } from '@/apis/Home.type';

export const portfolioList: IHomePortfolio[] = [
  {
    id: 'revisit',
    type: 'work',
    title: '리비짓',
    subtitle: '모션랩스',
    link: 'portfolio/revisit',
    site: [
      {
        title: '업무 공부 내용',
        link: 'https://material-soursop-6c3.notion.site/e33e63bce7994bc3a5373d1cc1c179c9?pvs=4',
      },
    ],
  },
  {
    id: 'fff',
    type: 'experience',
    title: '폼폼폼',
    subtitle: '항해99 10기',
    link: 'portfolio/fff',
    site: [
      {
        title: '폼폼폼 깃허브',
        link: 'https://github.com/form-maker/FFF-FE',
      },
      {
        title: '폼폼폼 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%B9%9C%ED%99%94%EC%A0%81%EC%9D%B8-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%ED%8F%BC%ED%8F%BC%ED%8F%BC',
      },
    ],
  },
  {
    id: 'bank',
    type: 'experience',
    title: '국민은행 온보딩',
    subtitle: 'Numble',
    link: 'portfolio/bank',
    site: [
      {
        title: 'bank 깃허브',
        link: 'https://github.com/AnSuebin/bank-app-onbording',
      },
      {
        title: '프로젝트 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89-%EC%95%A1%ED%8B%B0%EB%B8%8C-%EC%8B%9C%EB%8B%88%EC%96%B4-%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%8E%98%EC%9D%B4%EC%A7%80-hql6v4mx',
      },
      {
        title: '리팩터링 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89-%EC%95%A1%ED%8B%B0%EB%B8%8C-%EC%8B%9C%EB%8B%88%EC%96%B4-%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%8E%98%EC%9D%B4%EC%A7%80',
      },
    ],
  },
  {
    id: 'tamnaye',
    type: 'experience',
    title: '탐나는 예약 시스템',
    subtitle: '제주 더큰내일센터',
    link: 'portfolio/tamnaye',
    site: [
      {
        title: '탐나예 깃허브',
        link: 'https://github.com/tamnaye/frontend',
      },
      {
        title: '탐나예 회고',
        link: 'https://velog.io/@jejupalette/%ED%83%90%EB%82%98%EC%98%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8',
      },
    ],
  },
];

export const portfolioDetail: IHomePortfolioDetail[] = [
  {
    id: 'revisit',
    type: 'work',
    title: '리비짓',
    subtitle: '모션랩스',
    link: 'revisit',
    images: ['revisit1.png', 'revisit2.png', 'revisit3.png', 'revisit4.png'],
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
    site: [
      {
        title: '업무 공부 내용',
        link: 'https://material-soursop-6c3.notion.site/e33e63bce7994bc3a5373d1cc1c179c9?pvs=4',
      },
    ],
  },
  {
    id: 'fff',
    type: 'experience',
    title: '폼폼폼',
    subtitle: '항해99 10기',
    link: 'fff',
    images: ['fff1.png', 'fff2.png', 'fff3.png', 'fff4.png'],
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
    site: [
      {
        title: '폼폼폼 깃허브',
        link: 'https://github.com/form-maker/FFF-FE',
      },
      {
        title: '폼폼폼 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%B9%9C%ED%99%94%EC%A0%81%EC%9D%B8-%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC-%ED%8F%BC%ED%8F%BC%ED%8F%BC',
      },
    ],
  },
  {
    id: 'bank',
    type: 'experience',
    title: '국민은행 온보딩',
    subtitle: 'Numble',
    link: 'bank',
    images: ['bank1.gif', 'bank2.gif', 'bank3.gif', 'bank4.gif'],
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
    site: [
      {
        title: 'bank 깃허브',
        link: 'https://github.com/AnSuebin/bank-app-onbording',
      },
      {
        title: '프로젝트 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0-%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89-%EC%95%A1%ED%8B%B0%EB%B8%8C-%EC%8B%9C%EB%8B%88%EC%96%B4-%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%8E%98%EC%9D%B4%EC%A7%80-hql6v4mx',
      },
      {
        title: '리팩터링 회고',
        link: 'https://velog.io/@jejupalette/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A6%AC%ED%8C%A9%ED%84%B0%EB%A7%81-%EA%B5%AD%EB%AF%BC%EC%9D%80%ED%96%89-%EC%95%A1%ED%8B%B0%EB%B8%8C-%EC%8B%9C%EB%8B%88%EC%96%B4-%EC%98%A8%EB%B3%B4%EB%94%A9-%ED%8E%98%EC%9D%B4%EC%A7%80',
      },
    ],
  },
  {
    id: 'tamnaye',
    type: 'experience',
    title: '탐나는 예약시스템',
    subtitle: '제주 더큰내일센터',
    link: 'tamnaye',
    images: ['tamnaye1.gif', 'tamnaye2.png', 'tamnaye3.png', 'tamnaye4.png'],
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
    site: [
      {
        title: '탐나예 깃허브',
        link: 'https://github.com/tamnaye/frontend',
      },
      {
        title: '탐나예 회고',
        link: 'https://velog.io/@jejupalette/%ED%83%90%EB%82%98%EC%98%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8',
      },
    ],
  },
];

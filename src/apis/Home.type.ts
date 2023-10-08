type HomePortfolioType = 'work' | 'experience';

export interface IHomePortfolio {
  id: number;
  type: HomePortfolioType;
  title: string;
  subtitle: string;
  link: string;
}

export interface IHomePortfolioDetail extends IHomePortfolio {
  detail: string;
  startDate: string;
  endDate: string;
  site?: string;
  role: string;
  works: string[];
  stack: string[][];
}

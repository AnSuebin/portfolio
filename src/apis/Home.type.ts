export type PortfolioIdType = 'revisit' | 'fff' | 'bank' | 'tamnaye';
export type HomePortfolioType = 'work' | 'experience';

export interface ISite {
  title: string;
  link: string;
}

export interface IHomePortfolio {
  id: PortfolioIdType;
  type: HomePortfolioType;
  title: string;
  subtitle: string;
  link: string;
  site?: ISite[];
}

export interface IHomePortfolioDetail extends IHomePortfolio {
  detail: string;
  startDate: string;
  endDate: string;

  role: string;
  works: string[];
  stack: string[];
  images: string[];
}

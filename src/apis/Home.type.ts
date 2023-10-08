type HomePortfolioType = 'work' | 'experience';

interface IHomePortfolio {
  id: number;
  type: HomePortfolioType;
  title: string;
  subtitle: string;
  link: string;
}

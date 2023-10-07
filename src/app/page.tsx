import HomeHeader from '@/components/home/HomeHeader';
import HomeIntro from '@/components/home/HomeIntro';
import HomePortfolio from '@/components/home/HomePortfolio';
import HomeSummary from '@/components/home/HomeSummary';

export default function Home() {
  return (
    <main className="relative">
      <HomeHeader />
      <HomeIntro />
      <HomeSummary />
      <HomePortfolio />
    </main>
  );
}

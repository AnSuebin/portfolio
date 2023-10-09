import HomeIntro from '@/components/home/HomeIntro';
import HomePortfolio from '@/components/home/HomePortfolio';
import HomeSummary from '@/components/home/HomeSummary';

export default function HomePage() {
  return (
    <main className="w-full">
      <HomeIntro />
      <HomeSummary />
      <HomePortfolio />
    </main>
  );
}

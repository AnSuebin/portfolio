import HomeAboutMe from '@/components/home/HomeAboutMe';
import HomeIntro from '@/components/home/HomeIntro';
import HomePortfolio from '@/components/home/HomePortfolio';
import HomeSkill from '@/components/home/HomeSkill';
import HomeSummary from '@/components/home/HomeSummary';

export default function HomePage() {
  return (
    <main className="w-full">
      <HomeIntro />
      <HomeSummary />
      <HomeAboutMe />
      <HomeSkill />
      <HomePortfolio />
    </main>
  );
}

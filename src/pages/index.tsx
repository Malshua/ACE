import { Montserrat } from 'next/font/google';
import { PageSEO } from '../layout/components';
import {
  About,
  HeroSection,
  Mission_Vision,
  Values,
} from '@/components/sections';

const montserrat = Montserrat({ subsets: ['latin'] });

const Home = () => {
  const title = '';

  const meta_description = '';

  const meta_keywords = '';

  return (
    <>
      <PageSEO
        title={title}
        description={meta_description}
        keywords={meta_keywords}
      />

      <div className={`leading-8 scroll-smooth ${montserrat.className}`}>
        <HeroSection />
        <About />
        <Mission_Vision />
        <Values />
      </div>
    </>
  );
};

export default Home;

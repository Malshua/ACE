import { Montserrat } from 'next/font/google';
import { PageSEO } from '../layout/components';
import {
  About,
  Approach,
  Consulting,
  DealAdvisory,
  Digital,
  HeroSection,
  Mission_Vision,
  OurServices,
  SpeaktoAdvisers,
  Values,
} from '@/components/sections';
import Restructuring from '@/components/sections/home/Restructuring';

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
        <Approach />
        <OurServices />
        <DealAdvisory />
        <Restructuring />
        <Digital />
        <Consulting />
        <SpeaktoAdvisers />
      </div>
    </>
  );
};

export default Home;

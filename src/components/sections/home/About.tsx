import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { Polygon1, Polygon2, aboutimg } from '../../../../public/assets/images';

const About = () => {
  return (
    <section className="py-20">
      <Wrapper className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 px-5">
          <h5 className="font-semibold text-secondary-default">
            Strategic guidance to unlock their full potential
          </h5>
          <h3 className="text-5xl text-primary-default">
            A holistic approach to consulting for each client.
          </h3>
          <div className="pt-8 relative pl-12">
            <Image src={Polygon1} alt="polygon 1" className="" />
            <Image
              src={Polygon2}
              alt="polygon 2"
              className="absolute top-[65px] left-[130px] -z-10"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 leading-7 lg:pt-24 px-3">
          <p>
            ACE Business Consulting is a dynamic consulting company that stands
            as a beacon of excellence in the realm of business advisory
            services, committed to empowering organizations worldwide with
            innovative solutions and strategic guidance. Committed to excellence
            and innovation, we specialize in delivering comprehensive services,
            including private equity deal advisory, corporate restructuring, and
            bespoke digital solutions. Our expertise and dedication empower
            businesses to navigate challenges, seize opportunities, and achieve
            sustainable growth.
          </p>
          <p>
            Established by a collective of seasoned consultants, each with a
            rich tapestry of entrepreneurial prowess and branding acumen, ACE
            symbolizes the convergence of expertise, experience, and unwavering
            dedication to client success.
          </p>
          <Image src={aboutimg} alt="about alt" />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;

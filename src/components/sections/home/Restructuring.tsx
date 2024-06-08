import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { reconstructimg } from '../../../../public/assets/images';
import { stars } from '../../../../public/assets/icons';

const Restructuring = () => {
  const deals = [
    'Operational and financial restructuring',
    'Performance improvement stratergies',
    'Debt advisory and refinancing',
    'Crisis management and solutions',
  ];

  return (
    <section className="py-16">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <Image
              src={reconstructimg}
              alt="a tall building"
              width={550}
              height={400}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-secondary-default">
              Strategic guidance to unlock their full potential
            </h4>
            <h1 className="text-4xl">
              Corporate <br /> Restructuring
            </h1>
            <p>
              ACE Business Consulting is a dynamic consulting company that
              stands as a beacon of excellence in the realm of business advisory
              services, committed to empowering organizations worldwide with
              innovative solutions and strategic guidance.
            </p>
            <p>
              Committed to excellence and innovation, we specialize in
              delivering comprehensive services, including private equity deal
              advisory, corporate restructuring, and bespoke digital solutions.
              Our expertise and dedication empower businesses to navigate
              challenges, seize opportunities, and achieve sustainable growth.
            </p>
            <p>
              Established by a collective of seasoned consultants, each with a
              rich tapestry of entrepreneurial prowess and branding acumen, ACE
              symbolizes the convergence of expertise, experience, and
              unwavering dedication to client success.
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-5 pt-12">
          {deals.map((deal, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image src={stars} alt="stars icon" />
              <p className="font-medium">{deal}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Restructuring;

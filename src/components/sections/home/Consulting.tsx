import { Wrapper } from '@/layout/components';
import React from 'react';
import {
  briefcaseBold,
  chartSuccess,
  directRight,
} from '../../../../public/assets/icons';
import Image from 'next/image';

const Consulting = () => {
  const consults = [
    { text: 'Market entry and expansion stratergies', icon: chartSuccess },
    { text: 'Business model innovation', icon: briefcaseBold },
    { text: 'Strategic planning and execution', icon: directRight },
  ];

  return (
    <section className="bg-[#F2F4F7]  p-10">
      <Wrapper className="px-4 py-12 flex flex-col gap-10">
        <h1 className="text-4xl">Strategic Consulting</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {consults.map((con, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Image
                src={con.icon}
                alt="consulting icons"
                width={48}
                height={48}
                className="bg-secondary-default p-3 rounded-full "
              />

              <p className="font-medium">{con.text}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Consulting;

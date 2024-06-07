import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { heroimg } from '../../../../public/assets/images';

const HeroSection = () => {
  return (
    <section
      className="bg-primary-default xl:h-screen-minus-nav py-16 md:py-32 text-white"
      id="hero"
    >
      <Wrapper className="lg:grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 flex flex-col gap-6 pr-10">
          <h1 className="text-4xl font-medium">
            Empowering Growth with Innovative Business Solutions
          </h1>
          <p>
            ACE Business Consulting: Trusted Advisors for Strategic <br />{' '}
            Growth and Digital Innovation
          </p>

          <div className="flex border-b-2 w-fit border-white text-white item-center gap-3 cursor-pointer  hover:-translate-y-0.5 all__trans">
            <span className="font-medium">Contact us</span>
            <MdArrowOutward className="text-xl" />
          </div>
        </div>
        <div className="col-span-4 lg:translate-y-16 w-fit mx-auto mt-8">
          <Image src={heroimg} alt="hero image" />
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;

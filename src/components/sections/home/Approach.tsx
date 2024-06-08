import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { approach } from '../../../../public/assets/images';
import {
  apparrow,
  briefcase,
  globe,
  profile,
  ribbon,
} from '../../../../public/assets/icons';
import { MdArrowOutward } from 'react-icons/md';

const Approach = () => {
  return (
    <section className="pt-16 ">
      <Wrapper className="relative">
        <div className="">
          <Image
            src={approach}
            alt="hands and a laptop"
            width={900}
            height={800}
            className="hidden lg:block mx-auto lg:translate-x-32 "
          />
        </div>

        <div>
          <div className="flex flex-col gap-5  lg:w-[600px] p-7 lg:absolute bg-white -bottom-[40%] md:-bottom-[5%] md:left-[10%]">
            <div className="flex  justify-between items-center">
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold text-secondary-default">
                  Collaboration and communication
                </h4>
                <h2 className="text-3xl text-primary-default">Our approach</h2>
              </div>
              <Image src={apparrow} alt="arr design" />
            </div>

            <p className="text-sm md:text-base">
              At ACE, we believe in a holistic approach to consulting that
              integrates diverse perspectives and expertise to deliver tailored
              solutions for each client. Our team of experts combines deep
              industry knowledge with innovative thinking to address the unique
              challenges and opportunities facing businesses today. We
              prioritize collaboration and communication, working closely with
              clients to understand their needs and goals and develop strategies
              that drive tangible results.
            </p>

            <div className="flex flex-col lg:flex-row md:items-center justify-between gap-5 ">
              <div className="flex items-center gap-3">
                <Image
                  src={ribbon}
                  alt="ribbon"
                  width={43}
                  height={43}
                  className="p-3 border-2 border-secondary-default rounded-full"
                />
                <Image
                  src={briefcase}
                  alt="briefcase"
                  width={43}
                  height={43}
                  className="p-3 border-2 border-secondary-default rounded-full"
                />
                <Image
                  src={profile}
                  alt="profile users"
                  width={43}
                  height={43}
                  className="p-3 border-2 border-secondary-default rounded-full"
                />
                <Image
                  src={globe}
                  alt="the globe icon"
                  width={43}
                  height={43}
                  className="p-3 border-2 border-secondary-default rounded-full"
                />
              </div>
              <button className="flex text-primary-default border-2 w-fit bg-white item-center gap-2 px-4 py-2 rounded-md hover:-translate-y-0.5 all__trans">
                <span className="font-medium">Contact us</span>
                <MdArrowOutward className="md:text-xl text-secondary-default" />
              </button>
            </div>
          </div>
          <div className="h-[350px] w-[350px] bg-secondary-default absolute top-[44%] left-1.5 lg:left-28  rounded-md -z-40 md:-bottom-[7%] md:left-[9%]"></div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Approach;

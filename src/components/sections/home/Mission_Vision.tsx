import { Wrapper } from '@/layout/components';
import React from 'react';

const Mission_Vision = () => {
  return (
    <section className="py-16">
      <Wrapper className="grid grid-cols-1 xl:grid-cols-12 gap-5">
        <h1 className="text-secondary-default text-4xl col-span-2">
          Positive Impact
        </h1>
        <div className="px-3 border-t border-primary-default col-span-5 flex flex-col gap-3">
          <h2 className="font-semibold pt-6">Mission Statement:</h2>
          <p>
            At ACE, we aim to empower businesses to innovate, streamline
            processes, and maximize efficiency through cutting-edge technology
            and expert consulting. Our core values of integrity, innovation,
            excellence, and collaboration drive us.
          </p>
          <p>
            Our commitment to delivering exceptional solutions, fostering a
            diverse and inclusive workplace, and contributing to our community
            sets us apart. By leveraging our unique approach, deep industry
            expertise, and advanced technological capabilities, we inspire our
            clients and employees to reach their full potential and create a
            lasting impact in today&apos;s world.
          </p>
        </div>
        <div className="p-3 border-t border-primary-default col-span-5 flex flex-col gap-3">
          <h2 className="font-semibold pt-6">Vision Statement:</h2>
          <p>
            At ACE, we envision a future where businesses globally achieve
            unparalleled success through innovation and technological
            excellence. Over the next decade, we aim to transform the business
            consulting and tech industry, driving positive change and global
            progress. Our unique approach, deep industry expertise, and
            commitment to integrity will distinguish us as leaders in delivering
            impactful solutions. We inspire our clients and employees to dream
            big, unlock their potential, and pursue continuous improvement,
            ensuring our growth benefits society.
          </p>
          <p>
            As we navigate an ever-evolving landscape, our vision will remain
            adaptable. We will embrace new challenges and opportunities while
            staying true to our core values. We will create a brighter, more
            efficient, and innovative future for all.
          </p>
        </div>
      </Wrapper>

      <Wrapper className="py-20">
        <div>
          <h4 className="text-3xl lg:text-6xl font-extralight text-center">
            ACE BUSINESS CONSULTING LIMITED
          </h4>
        </div>
      </Wrapper>
    </section>
  );
};

export default Mission_Vision;

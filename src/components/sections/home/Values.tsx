import { Wrapper } from '@/layout/components';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import {
  Client,
  Collaboration,
  Excellence,
  Inclusivity,
  Innovation,
  Integrity,
  Sustainability,
} from '../../../../public/assets/icons';
import Image from 'next/image';

const Values = () => {
  const Corevalues = [
    {
      icon: Excellence,
      title: 'Excellence:',
      text: 'We are committed to delivering the highest quality services and exceeding client expectations in every interaction.',
    },
    {
      icon: Innovation,
      title: 'Innovation:',
      text: 'We embrace creativity and forward-thinking to develop innovative solutions that drive sustainable growth and competitive advantage.',
    },
    {
      icon: Integrity,
      title: 'Integrity:',
      text: 'We uphold the highest ethical standards in all our endeavors, fostering trust and transparency in our relationships with clients, partners, and stakeholders.',
    },
    {
      icon: Collaboration,
      title: 'Collaboration:',
      text: 'We believe in the power of collaboration and teamwork, leveraging diverse perspectives and expertise to achieve collective success.',
    },
    {
      icon: Client,
      title: 'Client-Centricity:',
      text: 'Our clients are at the centre of everything we do. We listen to their needs, understand their challenges, and deliver personalized solutions that drive success.',
    },
    {
      icon: Sustainability,
      title: 'Sustainability:',
      text: 'We are committed to creating long-term value and making a positive impact. Our strategies are designed with sustainability in mind, ensuring our actions benefit our clients and the broader community.',
    },
    {
      icon: Inclusivity,
      title: 'Inclusivity:',
      text: 'We value diversity and inclusion, recognizing that varied perspectives lead to better outcomes. We are dedicated to fostering a respectful, inclusive workplace where everyone can thrive.',
    },
  ];

  return (
    <section className="bg-primary-default py-8">
      <Wrapper className="flex flex-col gap-16 text-white py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl text-white">Our Core Values</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
          {Corevalues.map((item, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Image src={item?.icon} alt="icon" />
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <button className="flex text-primary-default bg-white w-fit item-center gap-2 px-4 py-2 rounded-md hover:-translate-y-0.5 all__trans">
          <span className="font-medium">Contact us</span>
          <MdArrowOutward className="text-xl text-secondary-default" />
        </button>
      </Wrapper>
    </section>
  );
};

export default Values;

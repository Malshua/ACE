import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { beSpoke } from '../../../../public/assets/icons';

const OurServices = () => {
  const ourServices = [
    {
      title: 'Fund raising and Deal Advisory in Private Equity',
      text: 'From due diligence to post-acquisition integration, we provide strategic guidance and support to private equity firms throughout the investment lifecycle, helping them identify and capitalise on lucrative opportunities in the market.',
    },
    {
      title: 'Corporate Restructuring',
      text: 'In an increasingly competitive landscape, companies must be agile and adaptable to stay ahead. We offer comprehensive restructuring services to help businesses optimize their operations, streamline processes, and navigate complex challenges with confidence.',
    },
    {
      title: '⁠Bespoke Digital Solutions',
      text: 'In the digital era, technology is a key driver of business success. Our team specializes in developing custom digital solutions tailored to the unique needs and objectives of each client, leveraging cutting-edge technologies and innovative approaches to enhance efficiency, productivity, and profitability.',
    },
  ];

  return (
    <section className="pt-48 md:pt-32">
      <Wrapper>
        <div className="flex flex-col gap-4 p-4">
          <h4 className="font-semibold text-secondary-default">
            Thrive in today&apos;s dynamic and competitive environment.
          </h4>
          <h1 className="text-4xl">Our services</h1>
          <p>
            ACE Consulting offers specialized services to address the diverse
            needs of businesses in today&apos;s dynamic market. Our tailored
            approach ensures seamless support throughout the investment
            lifecycle for private equity firms. From meticulous due diligence to
            post-acquisition integration, our strategic guidance maximizes value
            and minimizes risk, driving long-term success.
          </p>

          <p>
            In response to the ever-changing business landscape, ACE Consulting
            excels in corporate restructuring. Our comprehensive assessments
            identify opportunities for improvement, enabling us to implement
            strategic initiatives that optimize operations and drive
            profitability. Whether streamlining workflows or managing change, we
            develop tailored solutions that position clients for sustained
            success.
          </p>

          <p>
            Embracing the digital era, ACE Consulting delivers bespoke digital
            solutions to empower businesses. From custom software development to
            digital transformation strategies, our expertise and insight drive
            innovation and growth. By enhancing customer experiences and
            leveraging data analytics, we equip clients to thrive in
            today&apos;s competitive landscape, achieving their business
            objectives with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-10 text-white">
          {ourServices.map((service, index) => (
            <div
              key={index}
              className="bg-primary-default pt-20 pb-5 flex flex-col justify-end gap-4 px-5"
            >
              <h1 className="font-semibold pr-12">{service.title}</h1>
              <p className="font-normal text-sm leading-8">{service.text}</p>
              <Image src={beSpoke} alt="be spoke polygon" />
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default OurServices;

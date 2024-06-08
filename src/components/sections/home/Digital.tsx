import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { stars } from '../../../../public/assets/icons';
import { digital } from '../../../../public/assets/images';

const Digital = () => {
  const deals = [
    'Bespoke digital solutions',
    'IT strategy and implementations',
    'Data analytics and business intelligence',
    'Cybersecurity and risk management',
  ];
  return (
    <section className="my-8">
      <Wrapper className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-10 rounded-md px-7">
        <div className="flex flex-col gap-3 px-5">
          <h4 className="font-semibold text-secondary-default">
            Technology is a key driver of business success
          </h4>
          <h1 className="text-4xl">Digital transformation</h1>
          <p>
            In the digital era, technology is a key driver of business success.
            Our team specializes in developing custom digital solutions tailored
            to the unique needs and objectives of each client, leveraging
            cutting-edge technologies and innovative approaches to enhance
            efficiency, productivity, and profitability.
          </p>

          <div className="flex flex-col gap-1">
            {deals.map((deal, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image src={stars} alt="stars icon" />
                <p>{deal}</p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={digital}
          alt="a laptop on a table"
          width={450}
          height={450}
        />
      </Wrapper>
    </section>
  );
};

export default Digital;

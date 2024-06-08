import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { stars } from '../../../../public/assets/icons';

const DealAdvisory = () => {
  const deals = [
    'Fund raising',
    'Strategic investment insights',
    'Comprehensive due diligence',
    'Valuation and financial modeling',
    'Deal structuring and negotiation support',
  ];

  return (
    <section className=" text-white my-16">
      <Wrapper className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 bg-primary-default rounded-md px-7">
        <div className="flex flex-col gap-3 px-5">
          <h4 className="font-semibold text-secondary-default">
            Identify and capitalize on lucrative opportunities
          </h4>
          <h1 className="text-4xl">Deal Advisory in Private Equity</h1>
          <p>
            From due diligence to post-acquisition integration, we provide
            strategic guidance and support to private equity firms throughout
            the investment lifecycle, helping them identify and capitalize on
            lucrative opportunities in the market.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {deals.map((deal, index) => (
            <div key={index} className="flex items-center gap-2">
              <Image src={stars} alt="stars icon" />
              <p>{deal}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default DealAdvisory;

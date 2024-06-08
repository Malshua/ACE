import { Wrapper } from '@/layout/components';
import Image from 'next/image';
import React from 'react';
import { speakArr } from '../../../../public/assets/icons';
import { Input } from '@/components/elements';
import { MdArrowOutward } from 'react-icons/md';

const SpeaktoAdvisers = () => {
  return (
    <section>
      <Wrapper className="">
        <div className="grid grid-cols-1 md:grid-cols-12 bg-gradient-to-b from-[#E5B80B] to-[#FFCA00] p-3">
          <div className="relative content-end p-5 col-span-5">
            <Image
              src={speakArr}
              alt="an arrow facing left"
              className="absolute top-3 right-3"
            />
            <h1 className="text-4xl pb-3 font-medium">
              Speak to one of our advisers!
            </h1>
            <p>
              Are you looking for personalized guidance and expert advice? Our
              team of professional advisers is here to help you navigate your
              journey. Whether you need assistance with fundraising and deal
              advisory in Private Equity, corporate restructuring, or bespoke
              digital solutions, we&apos;re committed to providing the support
              you need.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-5 bg-white col-span-7">
            <p className="text-xl font-medium">
              If you&apos;re interested in collaborating or have any questions,
              simply fill out the form, and we&apos;ll get in touch with you.
              Alternatively, you can reach out to us at{' '}
              <span className="text-secondary-default">
                {' '}
                info@consult-ace.com
              </span>
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input type="text" label="Your Name" placeholder="Jane Cooper" />
              <Input
                type="text"
                label="Email Address"
                placeholder="janecooper@gmail.com"
              />
              <Input
                type="text"
                label="Phone Number"
                placeholder="(225) 555-0118"
              />
              <Input type="text" label="Company Name" placeholder="JaneCo" />
              <Input type="text" label="Website" placeholder="janecooper.org" />
              <Input
                type="text"
                label="Industry"
                placeholder="Technology & software"
              />
              <Input type="text" label="Budget" placeholder="Your budget" />
              <Input
                type="text"
                label="Expertise"
                placeholder="Mergers & Acquisitions"
              />
              <Input
                type="text"
                label="Business Description"
                placeholder="Kindly provide enough information about your business.."
              />
            </form>
            <button className="flex bg-primary-default text-white item-center gap-2 px-4 py-2 rounded-md hover:-translate-y-0.5 all__trans w-fit">
              <span className="font-medium">Contact us</span>
              <MdArrowOutward className="text-xl text-white" />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpeaktoAdvisers;

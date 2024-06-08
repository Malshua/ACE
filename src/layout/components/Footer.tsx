import React from 'react';
import Wrapper from './Wrapper';
import Image from 'next/image';
import { FaXTwitter } from 'react-icons/fa6';
import { LogoWhite } from '../../../public/assets/icons';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="pt-16">
      <Wrapper className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Image src={LogoWhite} alt="ace logo" width={48} height={48} />
            <p className="text-2xl">
              Navigating Complexity, Realizing Potential
            </p>
          </div>
          <div className="flex items-center gap-7">
            <div>
              <h4 className="text-xl font-medium">Address</h4>
              <p>
                3 Atbara St, Wuse, Abuja <br /> 904101, Federal Capital
                Territory
              </p>
            </div>
            <div>
              <h4 className="text-xl font-medium">Say Hello</h4>
              <p>contact@acebusiness.com</p>
              <p>(319) 555-0115</p>
            </div>
          </div>
        </div>

        <div className="h-[0.5px] w-full bg-[#98A2B3]"></div>

        <div className="flex justify-between items-center">
          <p>© 2077 ACE All rights reserved.</p>
          <div className="text-[#98A2B3] flex items-center gap-1">
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;

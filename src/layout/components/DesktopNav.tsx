import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Wrapper from './Wrapper';
import { Button } from '../../components/elements';
import { externalRoutes, internalRoutes, navRoutes } from '@/utils/appRoutes';
import { LogoWhite } from '../../../public/assets/icons';
import { MdArrowOutward } from 'react-icons/md';

const DesktopNav = () => {
  const { asPath } = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener('scroll', changeBackground);
  }, []);

  const signin_options = [
    { label: 'member', value: externalRoutes.MEMBER_LOGIN },
    { label: 'organisation', value: externalRoutes.ORG_LOGIN },
    { label: 'agent', value: externalRoutes.AGENT_LOGIN },
  ];

  return (
    <nav className={`hidden xl:block`}>
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link href={internalRoutes.HOME} className="mr-4">
              <Image
                src={LogoWhite}
                alt="akilaah logo"
                width="50"
                height="50"
              />
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <ul className="flex justify-around gap-8 text-white">
              {navRoutes?.map((route, index) => (
                <li
                  key={index}
                  className={`${
                    asPath.includes(route?.link)
                      ? 'text-primary-default border-b-2 border-primary-default font-semibold'
                      : 'text-primary-default'
                  } hover:border-b-2 border-primary-default all__trans hover:-translate-y-0.5`}
                >
                  <Link href={route?.link} className="block">
                    {route?.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="flex bg-primary-default text-white item-center gap-3 px-6 py-2 rounded-md hover:-translate-y-0.5 all__trans">
              <span className="font-medium">Contact us</span>
              <MdArrowOutward className="text-xl" />
            </button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default DesktopNav;

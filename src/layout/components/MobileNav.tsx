import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '@/components/elements';
import { useRouter } from 'next/router';
import { BiCaretDown } from 'react-icons/bi';
import DropDownComponent from './DropDownComponent';
import { externalRoutes, internalRoutes, navRoutes } from '@/utils/appRoutes';
import { LogoWhite } from '../../../public/assets/icons';

const documentationLinks = [
  { label: 'Membership', link: '/documentation/membership' },
  { label: 'Contribution', link: '/documentation/contribution' },
  { label: 'Loan', link: '/documentation/loan' },
  { label: 'Savings', link: '/documentation/savings' },
  { label: 'Withdrawal', link: '/documentation/withdrawal' },
  { label: 'Agent Portal', link: '/documentation/agentportal' },
  { label: 'Accounting', link: '/documentation/accounting' },
  { label: 'PocketPay', link: '/documentation/pocketpay' },
  {
    label: 'ProductLift',
    link: '/documentation/productlift',
  },
];

const MobileNav = () => {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  const handleMenu = () => {
    setOpen(prev => !prev);
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
    { label: 'member', link: externalRoutes.MEMBER_LOGIN },
    { label: 'organisation', link: externalRoutes.ORG_LOGIN },
    { label: 'agent', link: externalRoutes.AGENT_LOGIN },
  ];

  return (
    <nav className="block xl:hidden">
      <div
        className={`fixed z-[500] top-0 left-0 right-0 w-full bg-white flex justify-between items-center px-4 py-3 all__trans ${
          navbar ? ' shadow-lg' : ''
        }`}
      >
        <div className="flex-1">
          <Link href={internalRoutes.HOME}>
            <Image src={LogoWhite} alt="ace logo" width={48} height={48} />
          </Link>
        </div>

        <div className="mr-2 flex xl:hidden">
          <button
            onClick={handleMenu}
            className={`text-primary-default
            } inline-flex items-center justify-center rounded-md text-2xl`}
          >
            {open === true ? '' : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`p-5 fixed z-[9999] top-0 bottom-0 w-[350px] bg-white overflow-y-auto transition-all ease-in-out duration-300 flex flex-col gap-y-8 ${
          open ? 'left-0' : '-left-[500px]'
        }`}
      >
        <div className="flex justify-between items-center md:hidden">
          <Link href={internalRoutes.HOME}>
            <Image src={LogoWhite} alt="ace logo" width={48} height={48} />
          </Link>
          <button
            onClick={handleMenu}
            className="text-primary-default text-2xl font-normal"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="text-primary-default flex flex-col gap-8 ">
          {navRoutes?.map((route, index) => (
            <li key={index} onClick={handleMenu}>
              <Link href={route?.link}>{route?.label}</Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 items-center justify-between pt-32">
          <button>
            <div
              className="flex gap-1 items-center text-primary-default border border-transparent outline-none all__trans"
              onClick={() => handleOpenDropdown()}
            >
              <span>Sign in</span>
              <span className="text-primary-default">
                <BiCaretDown />
              </span>
            </div>
            <div>
              {openDropdown && (
                <div className="py-1 text-sm text-left flex flex-col text-primary-default all__trans">
                  {signin_options?.map((item: any, index: any) => (
                    <Link
                      href={item?.link}
                      className="my-1 py-2 px-3 border-b-[0.5px] capitalize"
                      key={index}
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </button>

          <Button className="px-6 py-2 rounded-md  bg-primary-default">
            <Link href="/" className="text-white text-xs font-semibold">
              Create account
            </Link>
          </Button>
        </div>
      </div>

      {open && (
        <div
          onClick={handleMenu}
          className="fixed z-20 top-0 left-0 bottom-0 right-0 bg-black/40"
        />
      )}
    </nav>
  );
};

export default MobileNav;

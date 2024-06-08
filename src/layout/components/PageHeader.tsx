import { useRouter } from 'next/router';
import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';
import { internalRoutes } from '@/utils/appRoutes';
import { MdArrowBackIos } from 'react-icons/md';

const PageHeader = () => {
  const { asPath } = useRouter();

  const route_title = asPath?.includes('faq')
    ? 'Frequently Asked Questions'
    : '';

  const route_desc = asPath?.includes('faq')
    ? 'Get knowledgeable about Ace with answers to common question asked by our users'
    : '';

  return (
    <section className="bg-primary-default text-white">
      <Wrapper v_padding="py-0">
        <div className="py-4 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <Link
              href={internalRoutes.HOME}
              className="flex items-center text-secondary-default font-bold"
            >
              <MdArrowBackIos className="text-xl" />
              <span>HOME</span>
            </Link>
            / <p className="text-sm">{route_title}</p>
          </div>
          <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold">
            {route_title}
          </h1>
          <div>{route_desc}</div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PageHeader;

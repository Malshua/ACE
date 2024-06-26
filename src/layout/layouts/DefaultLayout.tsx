import React, { ReactNode } from 'react';
import { DesktopNav, Footer, MobileNav } from '../components';
import Script from 'next/script';
import { SectionNavigationButtons } from '@/components/widgets';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <DesktopNav />
      {/* <MobileNav /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;

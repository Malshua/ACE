import React from 'react';
import { useRouter } from 'next/router';

const CanonicalURL = () => {
  const siteUrl = 'https://akilaah.com';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  const canonicalUrl = `${siteUrl}` + (asPath === '/' ? '' : cleanPath);

  return <link rel="canonical" href={canonicalUrl} />;
};

export default CanonicalURL;

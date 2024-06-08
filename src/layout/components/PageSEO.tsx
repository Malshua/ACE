import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  children?: ReactNode;
}

const PageSEO = ({ title, description, keywords, children }: PageSEOProps) => {
  const siteUrl = 'https://Ace.com/';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  const seoUrl = `${siteUrl}` + (asPath === '/' ? '' : cleanPath);

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={seoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/assets/images/logoWhite.svg" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: seoUrl,
            name: title,
            description: description,
          }),
        }}
      />

      {children && <div>{children}</div>}
    </Head>
  );
};

export default PageSEO;

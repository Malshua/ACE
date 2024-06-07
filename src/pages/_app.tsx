import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import type { AppProps } from 'next/app';
import LayoutWrapper from '../layout/LayoutWrapper';

const montserrat = Montserrat({ subsets: ['latin'] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.className} scroll-smooth`}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
  );
}

import { ReactNode } from 'react';
import { Montserrat, Raleway } from 'next/font/google';
import { Metadata } from 'next';

import { getDictionary, getMetadata } from '@/lib/dictionary';
import type { Locale } from '@/i18n.config';

import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

import '../globals.css';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const raleway = Raleway({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ru' }];
}

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  const { common, information } = await getDictionary(lang);
  const { header, footer } = common;

  return (
    <>
      <html lang={lang}>
        <meta name="yandex-verification" content="eb48da2ae388e42b" />
        <body
          className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] smOnly:pt-[82px]`}
        >
          <Header data={header} />
          <main>{children}</main>
          <Footer footer={footer} information={information} />
          <div id="modal" />
        </body>
      </html>
    </>
  );
}

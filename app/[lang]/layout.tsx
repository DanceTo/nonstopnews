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
    lang: Locale; // 'uk' | 'ru'
  }>;
};

export async function generateStaticParams() {
  return [{ lang: 'uk' }, { lang: 'ru' }];
}

// export async function generateMetadata(
//   props: Promise<{ params: { lang: Locale } }>,
// ): Promise<Metadata> {
//   const { params } = await props;
//   const { lang } = await params;

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

//   if (!baseUrl || !baseUrl.startsWith('http')) {
//     throw new Error(
//       'Environment variable NEXT_PUBLIC_BASE_URL is missing or invalid. It must start with http:// or https://',
//     );
//   }

//   const { meta, metadataHome } = await getMetadata(lang);
//   const { twitter, openGraph, icons, languages, manifest } = meta;
//   const { title, description, keywords } = metadataHome;

//   return {
//     title,
//     description,
//     metadataBase: new URL(baseUrl),
//     manifest,
//     alternates: {
//       canonical: `${baseUrl}/${lang}`,
//       languages,
//     },
//     keywords,
//     twitter,
//     openGraph: {
//       ...openGraph,
//       url: `${baseUrl}/${lang}`,
//     },
//     icons,
//   };
// }

export default async function Layout({ children, params }: LayoutProps) {
  const { lang } = await params;

  const { common, information } = await getDictionary(lang);
  const { header, footer } = common;

  return (
    <html lang={lang}>
      <body
        className={`${montserrat.variable} ${raleway.variable} grid min-h-screen grid-cols-1 grid-rows-[1fr_auto] md:grid-rows-[auto_1fr_auto] smOnly:pt-[82px]`}
      >
        <Header data={header} />
        <main>{children}</main>
        <Footer footer={footer} information={information} />
        <div id="modal" />
      </body>
    </html>
  );
}

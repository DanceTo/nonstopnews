import type { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import NewsArticlePage from '@/components/NewsArticlePage/NewsArticlePage';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// import { ModalInfoProps } from '@/components/ModalInfoContent/types';
import { ModalInfoContent } from '@/components/ModalInfoContent';

export type NewsPageProps = {
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
    article: string;
  }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang, article } = await params;

  const { articles } = await getDictionary(lang);
  const oneArticle = articles.find(m => m.slug === article);

  return (
    <section className={`section container pb-[48px] xl:pb-[100px]`}>
      <article className={`pt-[38px]`}>
        {oneArticle && <ModalInfoContent article={oneArticle} />}
      </article>
    </section>
  );
}

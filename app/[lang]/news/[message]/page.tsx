import type { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import NewsArticlePage from '@/components/NewsArticlePage/NewsArticlePage';

export type NewsPageProps = {
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
    message: string;
  }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang, message } = await params;

  const { news } = await getDictionary(lang);
  const msg = news.find(m => m.slug === message);

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <NewsArticlePage
        title={msg!.title}
        image={msg!.image}
        category={msg!.category}
        date={msg!.date}
        content={msg!.longText}
      />
    </section>
  );
}

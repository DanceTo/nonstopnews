import type { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';

export type NewsPageProps = {
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
    message: string;
  }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang, message } = await params;

  const { news } = await getDictionary(lang);
  const msg = news.find(m => m.slug === message);

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div className="container h-[200px]">{msg?.longText}</div>
    </section>
  );
}

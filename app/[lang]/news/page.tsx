import type { Locale } from '@/i18n.config';

export type NewsPageProps = {
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
};

export default async function NewsPage({ params }: NewsPageProps) {
  const { lang } = await params;

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div>Сторінка однієї новини!!!</div>
    </section>
  );
}

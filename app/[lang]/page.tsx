import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n.config';

export type HomeProps = {
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
};

export default async function Home({ params }: HomeProps) {
  const { lang } = await params;

  return <></>;
}

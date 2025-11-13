import { Locale } from '@/i18n.config';

export default async function NestedCategoryLayout(props: {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
}) {
  return <>{props.children}</>;
}

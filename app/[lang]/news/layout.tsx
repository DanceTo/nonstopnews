import { Locale } from '@/i18n.config';

export default async function NestedCategoryLayout(props: {
  children: React.ReactNode;
  params: Promise<{
    lang: Locale; // 'uk' | 'ru'
  }>;
}) {
  return <>{props.children}</>;
}

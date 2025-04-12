import { Locale } from '@/i18n.config';
import { NewsItem } from '@/components/NewsCatalog/NewsCatalog';

export interface NewsSectionProps {
  className?: string;
  isHomePage?: Boolean;
  lang: Locale;
  news: NewsItem[];
}

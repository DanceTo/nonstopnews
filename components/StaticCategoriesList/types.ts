import { Locale } from '@/i18n.config';
import { StaticCategoryDataInfo, CategoryDataInfo } from '@/types/categories';
import { NewsItem } from '../NewsCatalog/NewsCatalog';

export interface CategoriesListProps {
  categories: CategoryDataInfo[];
  lang?: Locale;
  className?: string;
}

export interface StaticCategoriesListProps {
  staticCategories: StaticCategoryDataInfo[];
  errorText: {
    subtitle: string;
    tip: string;
  };
  className?: string;
  news: NewsItem[];
  // onClick: React.Dispatch<React.SetStateAction<string>>;
}

export type CategorySlug = {
  sequence_number: number;
  slug: string;
};

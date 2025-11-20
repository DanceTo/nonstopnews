import { Locale } from '@/i18n.config';
import { ModalInfoProps } from '../ModalInfoContent/types';

export interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    slug: string;
    url: string;
    desc: string;
    modalInfo: {
      title: string;
      imageUrl: string;
      info: string;
      description: string;
    };
  };
  lang?: Locale;
}

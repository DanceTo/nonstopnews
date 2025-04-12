import { CategorySlug } from '@/components/StaticCategoriesList/types';
import { Image } from './commons';

export type CategoriesData = CategoryDataInfo[] | undefined;

export interface CategoriesDataType {
  categories: {
    data: CategoryDataInfo[];
  };
}

export type CategoryDataInfo = {
  id: string;
  title: string;

  url: string;
  image_description: string;
  filter: string;
};

export type StaticCategoryDataInfo = {
  id: string;
  title: string;

  url: string;
  image_description: string;
  filter: string;
};

export interface SlugsDataType {
  categories: {
    data: SlugsData[];
  };
}

export type SlugsData = {
  attributes: CategorySlug;
};

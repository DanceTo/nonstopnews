import type { Locale } from '@/i18n.config';

const dictionaries = {
  ru: async () => ({
    ...(await import(`@/dictionaries/ru/common.json`)).default,
    ...(await import(`@/dictionaries/ru/information.json`)).default,
    ...(await import(`@/dictionaries/ru/home_page.json`)).default,
    ...(await import(`@/dictionaries/ru/news.json`)).default,
    ...(await import(`@/dictionaries/ru/articles.json`)).default,
    // ...(await import(`@/dictionaries/en/business_page.json`)).default,
    // ...(await import(`@/dictionaries/en/category_page.json`)).default,
    // ...(await import(`@/dictionaries/en/product_page.json`)).default,
  }),

  en: async () => ({
    ...(await import(`@/dictionaries/en/common.json`)).default,
    ...(await import(`@/dictionaries/en/information.json`)).default,
    ...(await import(`@/dictionaries/en/home_page.json`)).default,
    ...(await import(`@/dictionaries/en/news.json`)).default,
    ...(await import(`@/dictionaries/en/articles.json`)).default,
    // ...(await import(`@/dictionaries/en/business_page.json`)).default,
    // ...(await import(`@/dictionaries/en/category_page.json`)).default,
    // ...(await import(`@/dictionaries/en/product_page.json`)).default,
  }),
};

const metadata = {
  ru: async () => ({
    ...(await import(`@/dictionaries/ru/meta/common.json`)).default,
    ...(await import(`@/dictionaries/ru/meta/home.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/business.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/category.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/product.json`)).default,
  }),

  en: async () => ({
    ...(await import(`@/dictionaries/en/meta/common.json`)).default,
    ...(await import(`@/dictionaries/en/meta/home.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/business.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/category.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/product.json`)).default,
  }),
};

const commonDictionaries = {
  ru: async () => (await import(`@/dictionaries/ru/common.json`)).default,
  en: async () => (await import(`@/dictionaries/en/common.json`)).default,
};

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
export const getMetadata = async (lang: Locale) => metadata[lang]();
export const getCommonDictionaries = async (lang: Locale) =>
  commonDictionaries[lang]();

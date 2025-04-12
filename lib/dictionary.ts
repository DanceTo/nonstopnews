import type { Locale } from '@/i18n.config';

const dictionaries = {
  ru: async () => ({
    ...(await import(`@/dictionaries/ru/common.json`)).default,
    ...(await import(`@/dictionaries/ru/information.json`)).default,
    ...(await import(`@/dictionaries/ru/home_page.json`)).default,
    ...(await import(`@/dictionaries/ru/news.json`)).default,
    ...(await import(`@/dictionaries/ru/traitors.json`)).default,
    // ...(await import(`@/dictionaries/en/business_page.json`)).default,
    // ...(await import(`@/dictionaries/en/category_page.json`)).default,
    // ...(await import(`@/dictionaries/en/product_page.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/common.json`)).default,
    ...(await import(`@/dictionaries/uk/information.json`)).default,
    ...(await import(`@/dictionaries/uk/home_page.json`)).default,
    ...(await import(`@/dictionaries/uk/news.json`)).default,
    ...(await import(`@/dictionaries/uk/traitors.json`)).default,
    // ...(await import(`@/dictionaries/uk/business_page.json`)).default,
    // ...(await import(`@/dictionaries/uk/category_page.json`)).default,
    // ...(await import(`@/dictionaries/uk/product_page.json`)).default,
  }),
};

const metadata = {
  ru: async () => ({
    ...(await import(`@/dictionaries/ru/meta/common.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/home.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/business.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/category.json`)).default,
    // ...(await import(`@/dictionaries/en/meta/product.json`)).default,
  }),

  uk: async () => ({
    ...(await import(`@/dictionaries/uk/meta/common.json`)).default,
    // ...(await import(`@/dictionaries/uk/meta/home.json`)).default,
    // ...(await import(`@/dictionaries/uk/meta/business.json`)).default,
    // ...(await import(`@/dictionaries/uk/meta/category.json`)).default,
    // ...(await import(`@/dictionaries/uk/meta/product.json`)).default,
  }),
};

const commonDictionaries = {
  ru: async () => (await import(`@/dictionaries/ru/common.json`)).default,
  uk: async () => (await import(`@/dictionaries/uk/common.json`)).default,
};

export const getDictionary = async (lang: Locale) => dictionaries[lang]();
export const getMetadata = async (lang: Locale) => metadata[lang]();
export const getCommonDictionaries = async (lang: Locale) =>
  commonDictionaries[lang]();

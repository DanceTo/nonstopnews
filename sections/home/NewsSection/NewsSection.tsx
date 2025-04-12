import { NEWS } from '@/data';
import { NewsSectionProps } from './types';
import { StaticCategoriesList } from '@/components/StaticCategoriesList/StaticCategoriesList';
import { getCommonDictionaries } from '@/lib/dictionary';

import NewsCatalog from '@/components/NewsCatalog/NewsCatalog';

const news = [
  {
    title:
      '08:28, 12.04.25 РФ націлилася на три області: генерал ЗСУ назвав міста, над якими нависла небезпека',
    image:
      'https://img.tsn.ua/cached/186/tsn-7d69491ed57b2e0aebe0922b41d97a86/thumbs/1200x630/9c/d9/c4ecb832e873a3e06894ffb6454ed99c.jpeg',
    category: 'donetsk',
    date: '12-04-2025',
    views: 309,
    likes: 445,
    slug: 'sms-news',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis quisquam molestiae quae est nemo dolor, minima veniam nostrum maxime reiciendis voluptate cupiditate, impedit deleniti nobis doloremque! Explicabo, illo saepe.',
  },
  {
    title:
      '10:28, 12.04.25 РФ 07:17, 12.04.25 Атака РФ на Київ: рятувальники показали фото ліквідації наслідків',
    image:
      'https://img.tsn.ua/cached/964/tsn-0b4bc102/thumbs/1200x630/d1/94/f68a5d07d27eb2cc31505f17469194d1.jpg',
    category: 'kherson',
    date: '12-04-2025',
    views: 218,
    likes: 445,
    slug: 'sadaf',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis quisquam molestiae quae est nemo dolor, minima veniam nostrum maxime reiciendis voluptate cupiditate, impedit deleniti nobis doloremque! Explicabo, illo saepe.',
  },
  {
    title:
      '08:28, 12.04.25 РФ націлилася на три області: генерал ЗСУ назвав міста, над якими нависла небезпека',
    image:
      'https://img.tsn.ua/cached/186/tsn-7d69491ed57b2e0aebe0922b41d97a86/thumbs/1200x630/9c/d9/c4ecb832e873a3e06894ffb6454ed99c.jpeg',
    category: 'donetsk',
    date: '12-04-2025',
    views: 4617,
    likes: 445,
    slug: 'sms-news1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis quisquam molestiae quae est nemo dolor, minima veniam nostrum maxime reiciendis voluptate cupiditate, impedit deleniti nobis doloremque! Explicabo, illo saepe.',
  },
  {
    title:
      '10:28, 12.04.25 РФ 07:17, 12.04.25 Атака РФ на Київ: рятувальники показали фото ліквідації наслідків',
    image:
      'https://img.tsn.ua/cached/964/tsn-0b4bc102/thumbs/1200x630/d1/94/f68a5d07d27eb2cc31505f17469194d1.jpg',
    category: 'kherson',
    date: '12-04-2025',
    views: 911,
    likes: 445,
    slug: 'sad13af',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt debitis quisquam molestiae quae est nemo dolor, minima veniam nostrum maxime reiciendis voluptate cupiditate, impedit deleniti nobis doloremque! Explicabo, illo saepe.',
  },
  {
    title:
      '08:28, 12.04.25 РФ націлилася на три області: генерал ЗСУ назвав міста, над якими нависла небезпека',
    image:
      'https://img.tsn.ua/cached/186/tsn-7d69491ed57b2e0aebe0922b41d97a86/thumbs/1200x630/9c/d9/c4ecb832e873a3e06894ffb6454ed99c.jpeg',
    category: 'donetsk',
    date: '12-04-2025',
    views: 3333,
    likes: 445,
    slug: 'sms-news2',
  },
];

export const NewsSection: React.FC<NewsSectionProps> = async ({
  className = '',
  isHomePage = false,
  lang,
}) => {
  const {
    common: {
      catalog: {
        home_title,
        product_title,
        subtitle,
        categories: staticCategories,
        serviceError,
      },
    },
  } = await getCommonDictionaries(lang);

  return (
    <section
      id={NEWS}
      className={`section  ${
        !isHomePage
          ? 'pb-[48px] pt-0 xl:pb-[100px]'
          : 'md:pt-[76px] xl:pb-[50px] xl:pt-[15px]'
      } ${className}`}
    >
      <div className="container">
        <h2
          className={`section-title-primary ${
            !isHomePage ? 'mb-6 text-center xl:mb-10' : 'mb-2'
          }`}
        >
          {isHomePage ? home_title : product_title}
        </h2>

        {isHomePage && (
          <p className="mb-6 text-md font-medium text-black-light/25">
            {subtitle}
          </p>
        )}

        <StaticCategoriesList
          staticCategories={staticCategories}
          errorText={serviceError}
        />

        {/* <div className="bg-green mt-8 flex h-[800px] items-center justify-center border-2 border-indigo-600">
          <div>ТУТ БУДУТЬ НОВИНИ</div>
          
        </div> */}
        <NewsCatalog news={news} />
      </div>
    </section>
  );
};

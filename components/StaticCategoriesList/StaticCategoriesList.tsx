'use client';
import { useState } from 'react';
import classNames from 'classnames';

import { StaticCategoriesListProps } from './types';
import { StaticCategoryCard } from '../ui/CategoryCard/StaticCategoryCard';
import NewsCatalog from '@/components/NewsCatalog/NewsCatalog';

export const StaticCategoriesList: React.FC<StaticCategoriesListProps> = ({
  staticCategories,
  errorText,
  className = '',
  news,
  // onClick,
}) => {
  const [filter, setFilter] = useState('');
  const filterdNews = filter
    ? news.filter(n => n.category === filter).slice(0, 5)
    : news.slice(0, 5);

  const listClasses = classNames('flex flex-wrap gap-4 xl:gap-2', className);

  return (
    <>
      <ul className={`${listClasses} news justify-center`}>
        {staticCategories.map(category => {
          const itemClasses = classNames({
            'translate-y-[-10px] transition': filter === category.filter,
          });

          const cardClasses = classNames({
            'zoom block grayscale-0 border-red2': filter === category.filter,
          });

          return (
            <li
              key={category.id}
              className={`basis-[calc((100%-16px)/2)]  md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(8px*5))/6)]`}
            >
              <button
                type="button"
                className={itemClasses}
                onClick={() => {
                  if (category.filter !== filter) setFilter(category.filter);
                  else setFilter('');

                  console.log('filterdNews', filterdNews);
                }}
              >
                <StaticCategoryCard
                  category={category}
                  errorText={errorText}
                  className={cardClasses}
                />
              </button>
            </li>
          );
        })}
      </ul>
      <NewsCatalog news={filterdNews} />
    </>
  );
};

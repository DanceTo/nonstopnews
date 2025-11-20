'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export type NewsItem = {
  title: string;
  image: string;
  category: string;
  date: string;
  views: number;
  likes: number;
  slug: string;
  tag?: string;
  description?: string;
  longText: string;
};

export interface NewsCatalogProps {
  news: NewsItem[];
}

export const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(' ') + '…'
    : text;
};

const NewsCatalog: FC<NewsCatalogProps> = ({ news }) => {
  if (news.length === 0) return null;

  const [latest, ...others] = news;

  return (
    <div className="space-y-6">
      {/* Велика перша новина */}
      <Link
        href={`/news/${latest.slug}`}
        className="group  mx-auto block w-[84%] overflow-hidden  pt-6"
      >
        <div className="relative h-64 w-full overflow-hidden rounded-xl md:h-96">
          <Image
            src={latest.image}
            alt={latest.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-zinc-500">
          <span>{latest.date}</span>
          <span className="text-red-600">●</span>
          <span>{latest.tag}</span>
          <span className="ml-auto">{latest.views} 👁️</span>
        </div>
        <h2 className="mt-1 text-xl font-semibold">{latest.title}</h2>
      </Link>

      {/* Інші новини */}
      <div className=" xl:flex xl:flex-wrap xl:gap-4">
        {others.map(item => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="group flex flex-col gap-4 rounded-lg p-2 transition-colors duration-300 hover:bg-zinc-100 focus:bg-zinc-100 md:flex-row xl:basis-[calc((100%-(16px*1))/2)]"
          >
            <div className="relative aspect-[3/2] w-full flex-shrink-0 overflow-hidden rounded-lg md:w-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-start gap-1">
              <h3 className="text-lg font-semibold leading-snug text-zinc-900">
                {item.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span>{item.date}</span>
                <span className="text-red-600">●</span>
                <span>{item.tag ?? ''}</span>
                <span className="ml-auto">{item.views} 👁️</span>
              </div>
              {item.description && (
                <p className="text-sm italic text-zinc-600">
                  {truncateText(item.description, 20)}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewsCatalog;

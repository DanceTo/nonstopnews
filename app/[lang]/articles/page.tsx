import { getDictionary, getMetadata } from '@/lib/dictionary';
import { ARTICLES } from '@/data';
import type { Locale } from '@/i18n.config';
import { ArticleCard } from '@/components/ArticleCard';
import classNames from 'classnames';

export type ArticlessPageProps = {
  params: Promise<{
    lang: Locale; // 'en' | 'ru'
  }>;
};

export default async function TraitorsPage({ params }: ArticlessPageProps) {
  const { lang } = await params;

  const { articles, title } = await getDictionary(lang);

  const className = '';
  const listClasses = classNames(
    'flex flex-wrap gap-4 justify-evenly xl:justify-start',
    className,
  );

  return (
    <section className={`section pb-[48px] pt-0 xl:pb-[100px] `}>
      <div className=" container p-4">
        <h3 className="mb-5 p-2 text-center font-bold">{title}</h3>
        <ul className={listClasses}>
          {articles.map(article => (
            <li
              key={article.id}
              className="basis-[calc((100%-16px)/2)] md:basis-[calc((100%-(16px*2))/3)] xl:basis-[calc((100%-(25px*2))/4)]"
            >
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

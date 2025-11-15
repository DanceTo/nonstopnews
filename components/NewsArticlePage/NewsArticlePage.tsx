// 'use client';

// import { FC } from 'react';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';

// interface NewsArticleProps {
//   title: string | '';
//   image: string;
//   category: string;
//   date: string;
//   content: string;
// }

// const NewsArticlePage: FC<NewsArticleProps> = ({
//   title,
//   image,
//   category,
//   date,
//   content = '',
// }) => {
//   const { slug } = useParams();

//   return (
//     <main className="mx-auto max-w-5xl px-4 py-10">
//       <article className="space-y-6">
//         <h1 className="text-3xl font-bold leading-tight text-[#c40c00] md:text-5xl">
//           {title}
//         </h1>

//         <div className="flex items-center gap-3 text-sm text-zinc-500">
//           <span>{date}</span>
//           <span className="text-[#c40c00]">●</span>
//           <span>{category}</span>
//         </div>

//         <div className="relative h-64 w-full overflow-hidden rounded-lg md:h-[450px]">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="prose prose-zinc prose-lg max-w-none">
//           <div dangerouslySetInnerHTML={{ __html: content }} />
//         </div>
//       </article>
//     </main>
//   );
// };

// export default NewsArticlePage;

'use client';

import { FC } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

interface NewsArticleProps {
  title: string;
  image: string;
  category: string;
  date: string;
  content: string;
  tag: string;
}

const NewsArticlePage: FC<NewsArticleProps> = ({
  title,
  image,
  category,
  date,
  content,
}) => {
  const { slug } = useParams();

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <article className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
        {/* Header image */}
        <div className="relative h-64 w-full md:h-[400px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 md:p-10">
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#c40c00] md:text-5xl">
              {title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-zinc-500">
              <span>{date}</span>
              <span className="text-[#c40c00]">●</span>
              <span>{category}</span>
            </div>
          </div>

          <hr className="border-t border-zinc-200" />

          <div className="prose prose-zinc prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </article>
    </main>
  );
};

export default NewsArticlePage;

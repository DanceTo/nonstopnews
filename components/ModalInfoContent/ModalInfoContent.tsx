import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { ModalInfoProps } from './types';

// export const ModalInfoContent: React.FC<ModalInfoProps> = ({ modalInfo }) => {
//   const { title, imageUrl, info, description } = modalInfo;
// author = { photoUrl, name, socials: { instagram, twitter, telegram } }
// const author = {
//   photoUrl: '/authors/ivanov.jpg',
//   name: 'Иванов Сергей Петрович',
//   socials: {
//     instagram: 'https://instagram.com/ivanov',
//     telegram: 'https://t.me/ivanov',
//   },
// };

//   return (
//     <div className="h-full w-full overflow-auto bg-white p-4 text-zinc-900 md:p-8">
//       <div className="flex flex-col gap-8 overflow-auto xl:flex-row">
//         {/* Горизонтальное адаптивное изображение */}
//         <div className="w-full flex-shrink-0 xl:w-1/2">
//           <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-[#c40c00] shadow-md">
//             <Image
//               src={imageUrl}
//               alt={title}
//               fill
//               className="object-cover object-center"
//             />
//           </div>
//         </div>

//         {/* Текстовый блок */}
//         <div className="flex w-full flex-col justify-between gap-4 xl:w-1/2">
//           <div>
//             <h2 className="text-3xl font-extrabold leading-tight text-[#c40c00] md:text-4xl">
//               {title}
//             </h2>
//             <p className="mb-4 mt-1 text-sm italic text-zinc-600">{info}</p>

//             <div className="text-base leading-relaxed text-zinc-800 md:text-lg">
//               {description}
//             </div>
//           </div>

//           {/* БЛОК АВТОРА */}
//           <div className="mt-6 flex items-center gap-4 rounded-lg border border-zinc-200 p-4 shadow-sm">
//             {/* Фото автора */}
//             <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-zinc-300">
//               <Image
//                 // src={author.photoUrl}
//                 src={
//                   'https://imgv3.fotor.com/images/blog-richtext-image/a-shadow-of-a-boy-carrying-the-camera-with-red-sky-behind.jpg'
//                 }
//                 // alt={author.name}
//                 alt="some photo"
//                 fill
//                 className="object-cover object-center"
//               />
//             </div>

//             {/* Информация */}
//             <div className="flex flex-col">
//               <span className="text-lg font-semibold">{author.name}</span>
//               <div className="mt-1 flex gap-3 text-sm text-[#c40c00]">
//                 {author.socials.instagram && (
//                   <a
//                     href={author.socials.instagram}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Instagram
//                   </a>
//                 )}
//                 {author.socials.twitter && (
//                   <a
//                     href={author.socials.twitter}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Twitter
//                   </a>
//                 )}
//                 {author.socials.telegram && (
//                   <a
//                     href={author.socials.telegram}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Telegram
//                   </a>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export const ModalInfoContent: React.FC<ModalInfoProps> = ({ modalInfo }) => {
  const { title, imageUrl, info, description } = modalInfo;

  const author = {
    photoUrl:
      'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Иванов Сергей Петрович',
    socials: {
      vk: 'https://vk.com/ivanov',
      x: 'https://x.com/ivanov',
      telegram: 'https://t.me/ivanov',
    },
  };

  return (
    <div className="h-full w-full overflow-auto bg-white p-4 text-zinc-900 md:p-8">
      <div className="flex flex-col gap-8 overflow-auto xl:flex-row">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="w-full flex-shrink-0 xl:w-1/2">
          {/* ГЛАВНОЕ ИЗОБРАЖЕНИЕ */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border-2 border-[#c40c00] shadow-md">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* БЛОК АВТОРА */}
          <div
            className="
              mt-6 flex flex-row items-center gap-4 rounded-xl border border-zinc-200 
              bg-zinc-50 p-5 shadow-md
              transition-all duration-300 
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Фото автора */}
            <div
              className="
                relative h-24 w-24 overflow-hidden rounded-full border border-zinc-300 shadow-sm
                transition-transform duration-300
                hover:scale-105
              "
            >
              <Image
                src={author.photoUrl}
                alt={author.name}
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Информация об авторе */}
            <div className="text-center">
              <p className="text-lg font-semibold text-zinc-900">
                {author.name}
              </p>

              {/* Соцсети */}
              <div className="mt-3 flex justify-center gap-5 text-[#c40c00]">
                {/* Instagram */}

                {/* VK */}
                {author.socials.vk && (
                  <Link
                    href={author.socials.vk}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-300 hover:scale-110 hover:opacity-70"
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 512 512"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M245.49 512h21.32c115.73 0 173.61 0 209.56-35.94 35.94-35.95 35.63-93.8 35.63-209.25v-21.62c0-115.43 0-173.3-35.63-209.25C440.73 0 382.54 0 266.81 0h-21.32C129.74 0 71.89 0 35.94 35.94 0 71.89 0 129.72 0 245.19v21.62c0 115.45 0 173.3 35.94 209.25C71.89 512 129.74 512 245.49 512zm29.26-142.85c-115.45 0-185.51-80.1-188.23-213.2h58.47c1.82 97.78 46.3 139.27 80.4 147.73V155.95h56.05v84.36c32.89-3.65 67.3-42.02 78.89-84.36h55.12c-8.83 52.08-46.29 90.46-72.79 106.29 26.5 12.81 69.14 46.31 85.58 106.91h-60.6c-12.8-40.51-44.17-71.88-86.2-76.14v76.14h-6.69z"
                      />
                    </svg>
                  </Link>
                )}

                {/* Telegram */}
                {author.socials.telegram && (
                  <Link
                    href={author.socials.telegram}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all duration-300 hover:scale-110 hover:opacity-70"
                  >
                    <svg
                      viewBox="0 0 333334 333334"
                      className="h-6 w-6 text-[#c40c00]"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}

                {/* X */}
                <Link
                  href={author.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all duration-300 hover:scale-110 hover:opacity-70"
                >
                  {author.socials.x && (
                    <svg
                      viewBox="0 0 122.88 122.88"
                      className="h-6 w-6"
                      shapeRendering="geometricPrecision"
                      textRendering="geometricPrecision"
                      imageRendering="optimizeQuality"
                    >
                      <path
                        d="M17.89 0h88.9c8.85 0 16.1 7.24 16.1 16.1v90.68c0 8.85-7.24 16.1-16.1 16.1H16.1c-8.85 0-16.1-7.24-16.1-16.1v-88.9C0 8.05 8.05 0 17.89 0zM30.3 31.06H51l10.76 18.7 10.45-18.7h20.45L73.79 60.49l20.66 31.33H73.32L61.4 72.3 49.39 91.82H28.43l20.95-31.67L30.3 31.06z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА — текст */}
        <div className="flex w-full flex-col justify-start gap-4 xl:w-1/2">
          <h2 className="text-3xl font-extrabold leading-tight text-[#c40c00] md:text-4xl">
            {title}
          </h2>
          <p className="mb-2 text-sm italic text-zinc-600">{info}</p>
          <div className="text-base leading-relaxed text-zinc-800 md:text-lg">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

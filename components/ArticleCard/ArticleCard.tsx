'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { ModalInfoContent } from '../ModalInfoContent';
import { ArticleCardProps } from './types';

import { truncateText } from '../NewsCatalog/NewsCatalog';

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, url } = article;

  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  return (
    <>
      <button
        type="button"
        onClick={onToggleShowModal}
        tabIndex={0}
        className="group relative h-48 w-72 cursor-pointer overflow-hidden rounded-xl border-2 border-[#c40c00] bg-zinc-900 shadow-xl transition-transform duration-300 hover:scale-105 focus:scale-105"
      >
        {/* Фото */}
        <div className="relative h-full w-full">
          <Image
            src={url}
            alt={title}
            fill
            className="object-cover object-center transition-opacity duration-300 group-hover:opacity-80"
          />
        </div>

        {/* Ім'я */}
        <div className="z-2 absolute bottom-0 w-full bg-[#c40c00] bg-opacity-90 py-1 text-center">
          <h3 className="py-2 text-sm font-bold uppercase tracking-wide text-white">
            {truncateText(title, 5)}
          </h3>
        </div>
      </button>

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <ModalInfoContent article={article} />
      </ModalWindow>
    </>
  );
};

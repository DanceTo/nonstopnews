'use client';
import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { ModalWindow } from '@/components/ui/ModalWindow';

import { ArticleCardProps } from './types';

export const ArticleCard: React.FC<ArticleCardProps> = ({
  traitor: {
    id,
    attributes: {
      title,
      slug,
      image: {
        image_description,
        photo: {
          data: {
            attributes: { url },
          },
        },
      },
    },
  },
  lang,
  className = '',
}) => {
  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  const cardClasses = classNames(
    'zoom block border rounded-sm border-red',
    className,
  );

  return (
    <>
      <button type="button" onClick={onToggleShowModal} className={cardClasses}>
        <div className="relative h-[calc((100vw-(20px*2)-16px)/2)] overflow-hidden sm:h-[212px] md:h-[256px] xl:h-[224px]">
          <Image
            className="zoom-image h-full w-full object-cover object-center"
            src={url}
            alt={image_description}
            width={224}
            height={256}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 17vw"
          />
        </div>

        <h3 className="p-3 text-center font-bold">{title}</h3>
      </button>

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <div>Детальна інформація про колаборанта {slug} тут!</div>
      </ModalWindow>
    </>
  );
};

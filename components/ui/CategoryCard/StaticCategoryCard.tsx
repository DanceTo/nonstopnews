import { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import { ModalWindow } from '../ModalWindow';
import { ServiceErrorNotification } from '@/components/ServiceErrorNotification';

import { StaticCategoryCardProps } from './types';

export const StaticCategoryCard: React.FC<StaticCategoryCardProps> = ({
  category: { url, title, filter, image_description },
  errorText,
  className = '',
}) => {
  const cardClasses = classNames('zoom block', className);

  return (
    <>
      <div className="relative mb-3 h-[calc((100vw-(20px*2)-16px)/4)] overflow-hidden rounded-[5px] sm:h-[100px] md:h-[105px] xl:mb-5 xl:h-[110px]">
        <Image
          // className="grayscale transition-all duration-300"
          className={`zoom-image h-full w-full object-cover object-center grayscale transition-all duration-300 ${className}`}
          src={url}
          alt={image_description}
          width={224}
          height={256}
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 17vw"
        />
      </div>

      <p className="text-center font-medium">{title}</p>
    </>
  );
};

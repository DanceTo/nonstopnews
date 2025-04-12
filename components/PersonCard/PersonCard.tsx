'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ModalWindow } from '@/components/ui/ModalWindow';
import { ModalInfoContent } from '../ModalInfoContent';
import { PersonCardProps } from './types';

export const PersonCard: React.FC<PersonCardProps> = ({ traitor, lang }) => {
  const { id, title, slug, url, desc, modalInfo } = traitor;

  const [showModal, setShowModal] = useState(false);
  const onToggleShowModal = () => setShowModal(prev => !prev);

  return (
    <>
      <button
        type="button"
        onClick={onToggleShowModal}
        tabIndex={0}
        className="group relative h-96 w-72 cursor-pointer overflow-hidden rounded-xl border-2 border-[#c40c00] bg-zinc-900 shadow-xl transition-transform duration-300 hover:scale-105 focus:scale-105"
      >
        {/* Снайперський приціл на всю картинку */}
        <div className="pointer-events-none absolute left-0 top-5 z-20 hidden h-3/4 w-full items-center justify-center group-hover:flex">
          <div className="relative h-full w-full">
            {/* Перехрестя */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 transform bg-[#c40c00] opacity-70" />
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 transform bg-[#c40c00] opacity-70" />
            {/* Коло */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-ping-slow h-3/5 w-3/5 rounded-full border-2 border-[#c40c00] opacity-70"></div>
              <div className="absolute h-3/5 w-3/5 rounded-full border border-[#c40c00]"></div>
            </div>
          </div>
        </div>

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
        <div className="z-2 absolute bottom-0 w-full bg-[#c40c00] bg-opacity-90 py-3 text-center">
          <h3 className="text-xl font-bold uppercase tracking-wide text-white">
            {title}
          </h3>
        </div>
      </button>

      <ModalWindow onModalClose={onToggleShowModal} showModal={showModal}>
        <ModalInfoContent modalInfo={modalInfo} />
      </ModalWindow>
    </>
  );
};

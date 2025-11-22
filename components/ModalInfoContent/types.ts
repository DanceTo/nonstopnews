import { Url } from 'next/dist/shared/lib/router/router';

export interface ModalInfoProps {
  article: {
    id: string;
    title: string;
    slug: string;
    url: string;
    desc: string;
    modalInfo: {
      title: string;
      imageUrl: string;
      info: string;
      description: string;
    };
    author: {
      photoUrl: string;
      name: string;
      socials: {
        vk?: string;
        x?: string;
        telegram?: string;
      };
    };
  };
}

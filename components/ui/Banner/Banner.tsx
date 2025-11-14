import Image from 'next/image';
import { getBase64, shimmer } from '@/utils';
import { BannerProps } from './types';

export const Banner: React.FC<BannerProps> = ({
  photo: {
    data: {
      attributes: { url },
    },
  },
  image_description,
}) => (
  <div>
    <Image
      className="h-[50vw] h-full w-full w-full object-cover object-center sm:h-[240px] md:h-[384px] xl:mx-auto xl:h-[600px] xl:w-[1220px] xl:rounded-[100px] smOnly:object-contain"
      style={{
        maskImage:
          'radial-gradient(circle at center, rgb(204, 23, 23) 70%, rgba(193, 11, 11, 0) 94%)',
        WebkitMaskImage:
          'radial-gradient(circle at center, rgb(204, 23, 23) 70%, rgba(193, 11, 11, 0) 94%)',
      }}
      width={1220}
      height={610}
      priority
      src={url}
      alt={image_description}
      sizes="100wv"
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${getBase64(shimmer(700, 475))}`}
    />
  </div>
);

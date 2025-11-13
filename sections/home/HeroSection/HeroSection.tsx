import { BannerSlider } from '@/components/BannerSlider';
import { HeroSectionProps } from './types';

export const HeroSection: React.FC<HeroSectionProps> = async ({
  hero: { hiddenTitle, banners: staticBanners },
  lang,
}) => {
  return (
    <section className="section pb-0 md:pb-5 md:pt-0 xl:pb-[35px] smOnly:pt-0">
      <div className="container !px-0">
        <h1 className="visually-hidden">{hiddenTitle}</h1>

        <BannerSlider banners={staticBanners} />
      </div>
    </section>
  );
};

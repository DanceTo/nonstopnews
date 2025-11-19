'use client';

import classNames from 'classnames';
import { Banner } from '../ui/Banner';
import { Slider } from '../ui/Slider';
import { BannerSliderProps } from './types';

export const BannerSlider: React.FC<BannerSliderProps> = ({
  banners,
  className = '',
}) => {
  const wrapClasses = classNames(
    'h-[65vh] sm:h-[280px] md:h-[384px] xl:h-[500px] smOnly:pt-10 smOnly:h-[auto]',
    className,
  );

  return (
    <div className={wrapClasses}>
      <Slider
        id="homepage-hero"
        data={banners}
        element={Banner}
        isAutoplay={true}
        isLoop={true}
        isPagination={true}
        isInteractive={true}
        isFadeEffect={true}
        isNavigation={true}
        navigationBreakpoints={{
          isMobile: false,
          isTablet: false,
          isDesktop: true,
        }}
      />
    </div>
  );
};

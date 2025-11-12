'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import classNames from 'classnames';
import { Locale } from '@/i18n.config';

import LogoSvg from '@/public/icons/icon_lev.svg';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({
  position = 'header',
  className = '',
  logoRightText = '',
  logoLeftText = '',
}) => {
  const lang = useParams().lang as Locale;
  const logoSvgStyles = classNames('h-[48px] w-[48px] mb-0', {
    'xl:w-[80px] xl:h-[80px] mb-[-20px]': position === 'header',
    'md:w-[80px] md:h-[80px]': position === 'footer' || 'contacts',
  });
  const logoTextStyles = classNames({
    'container mb-4 flex max-w-fit items-center justify-center font-bold text-red2 xl:text-5xl':
      position === 'header',
  });

  return (
    <Link
      href={`/${lang}`}
      className={`common-transition z-2 relative block max-w-max text-black-light hover:text-red focus:text-red ${className} ${logoTextStyles}`}
    >
      <LogoSvg width={80} height={80} className={logoSvgStyles} />
    </Link>
  );
};

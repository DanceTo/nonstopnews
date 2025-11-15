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
  const logoSvgStyles = classNames('h-[150px] w-[180px] mb-[-75px]', {
    'xl:w-[350px] xl:h-[80px] xl:mb-[-20px] md:w-[180px] md:h-[150px] md:mb-[-12px]':
      position === 'header',
    'md:w-[180px] md:h-[80px] md:mb-4 xl:w-[180px]':
      position === 'footer' || 'contacts',
  });
  const logoTextStyles = classNames({
    'container mb-4 flex max-w-fit items-center justify-center font-bold text-red2 xl:text-5xl':
      position === 'header',
  });

  return (
    <Link
      href={`/${lang}`}
      className={`common-transition relative z-10 block inline-block max-w-max text-black-light hover:text-red focus:text-red ${className} ${logoTextStyles}`}
    >
      <LogoSvg width={200} height={80} className={logoSvgStyles} />
    </Link>
  );
};

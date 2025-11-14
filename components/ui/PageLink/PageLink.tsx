'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { PageLinkProps } from './types';
import { ARTICLES } from '@/data';
import { useParams } from 'next/navigation';

export const PageLink: React.FC<PageLinkProps> = ({
  text,
  isIcon = false,
  onClick,
  isAnchor = false,
  className = '',
}) => {
  const linkClasses = classNames({ 'decor case': isIcon }, className);

  const params = useParams();
  return (
    <Link
      href={isAnchor ? '#' : `/${params.lang}${ARTICLES}`}
      className={linkClasses}
      onClick={onClick}
    >
      <span className="link font-bold">{text}</span>
    </Link>
  );
};

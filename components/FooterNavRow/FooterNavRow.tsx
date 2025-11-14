'use client';
import React from 'react';
import Link from 'next/link';

import { checkPageName, smoothScroll } from '@/utils';
import { FooterNavRowProps } from '@/components/FooterNavRow/types';
import { PageLink } from '@/components/ui/PageLink';
import { usePathname } from 'next/navigation';
import { ARTICLES } from '@/data';

export const FooterNavRow: React.FC<FooterNavRowProps> = ({
  data,
  // dataOrder,
  // form,
}: FooterNavRowProps) => {
  const { nav_text, nav, forTraitorBtnText } = data;

  const pathname = usePathname();
  const isBusinessPage = checkPageName(pathname, ARTICLES);

  return (
    nav?.length > 0 && (
      <div className="hidden xl:flex xl:flex-col xl:gap-3 xl:text-base">
        <p className="xl:font-bold">{nav_text}</p>
        <ul className="xl:grid xl:gap-3">
          {nav.map(item => (
            <li key={item.href || item.name}>
              <Link
                className="link xl:font-medium"
                href={item.href || '#'}
                onClick={e => smoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li></li>
          <li>
            <PageLink
              className="xl:font-medium"
              isIcon={false}
              text={forTraitorBtnText}
              isAnchor={isBusinessPage ? true : false}
            />
          </li>
        </ul>
      </div>
    )
  );
};

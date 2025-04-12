'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

import { checkPageName } from '@/utils';
import { HOME, TRAITORS } from '@/data/routes';
import { Locale } from '@/i18n.config';
import { Logo } from '@/components/ui/Logo';
import { PageLink } from '@/components/ui/PageLink';
import { MobileMenu } from '@/components/MobileMenu';
import { SideMenu } from '@/components/SideMenu';
import { TranslationSwitcher } from '@/components/TranslationSwitcher';

import { HeaderProps } from './types';
import classNames from 'classnames';

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const {
    sidePanelMenu,
    nav,
    mobileMenu,
    toHomePage,
    languageButtonText,
    logoLeftText,
    logoRightText,
    forTraitorBtnText,
  } = data;

  const pathname = usePathname();
  const lang = useParams().lang as Locale;
  const isHomePage = checkPageName(pathname, HOME);
  const isTraitorPage = checkPageName(pathname, TRAITORS);
  const logoStyles = classNames({
    'mb-[-49px] md:mb-[-40px] xl:mb-[-30px]': isHomePage,
    'mb-[-49px] md:mb-[-40px] xl:mb-[-45px]': isTraitorPage,
  });

  return (
    <header className="z-10 w-full bg-body py-4 md:pb-8 md:pt-9 xl:pb-10 smOnly:fixed smOnly:top-0">
      <Logo
        logoLeftText={logoLeftText}
        logoRightText={logoRightText}
        position="header"
        className={logoStyles}
      />

      <div className="smOnly:header-underline container relative">
        <nav className="grid grid-cols-3 items-center justify-items-stretch">
          {isHomePage ? (
            <SideMenu
              btnAriaClose={sidePanelMenu.closePanelBtnAriaText}
              btnAriaOpen={sidePanelMenu.openPanelBtnAriaText}
              links={nav}
            />
          ) : (
            <Link
              className="link hidden max-w-fit items-center md:flex"
              href={`${toHomePage.href}${lang}`}
            >
              {toHomePage.name}
            </Link>
          )}

          <MobileMenu
            businessText={forTraitorBtnText}
            links={nav}
            languageButtonText={languageButtonText}
            btnAriaClose={mobileMenu.closeMenuBtnAriaText}
            btnAriaOpen={mobileMenu.openMenuBtnAriaText}
            toHomePage={toHomePage}
          />

          <div className="justify-self-center"></div>
          <div className="flex items-center justify-self-end">
            {!isTraitorPage && (
              <PageLink
                isIcon={true}
                text={forTraitorBtnText}
                className="pageLink h-6 items-center sm:flex md:mr-6 xl:mr-[88px] smOnly:hidden"
              />
            )}

            <TranslationSwitcher
              lang={lang}
              buttonText={languageButtonText}
              className="md:mr-7 xl:mr-9 smOnly:hidden"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

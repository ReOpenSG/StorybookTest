import React, {
  Children, useEffect, useRef, useState,
} from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '@/components/Header/MenuLink';
import Sitemap from '@/components/Header/Sitemap';
import SitemapMobile from '@/components/Header/SitemapMobile';
import opensgLogo from '@/assets/header_opensg.png';
import opensgLogoBlue from '@/assets/header_opensgBlue.png';
import hamburgerIcon from '@/assets/header_hamburger.svg';
import closeIcon from '@/assets/header_close.svg';
import styles from '@/components/Header/Header.module.css';

function Header() {
  const [whiteHeader, setWhiteHeader] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleLanguageActive = (lang) => {
    setActiveLanguage(lang);
  };

  const handleMenuActive = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuInactive = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    console.log(location);
    handleMenuInactive();
  }, [location]);

  useEffect(() => {
    if (location.pathname.includes('/solutions') || location.pathname.includes('/machines') || location.pathname.includes('/devices') || location.pathname === '/community' || location.pathname === '/library' || location.pathname === '/contact') {
      setWhiteHeader(true);
    } else {
      setWhiteHeader(false);
    }
  }, [location]);

  useEffect(() => {
    if (activeMenu === 'Sitemap') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeMenu]);

  useEffect(() => {
    if (activeMenu) {
      const menuElement = menuRef.current;
      const focusableElements = menuElement.querySelectorAll(
        '[href]',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey
            && document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
          setActiveMenu(null);
        }
      };

      menuElement.addEventListener('keydown', handleTabKeyPress);
      menuElement.addEventListener('keydown', handleEscapeKeyPress);

      return () => {
        menuElement.removeEventListener('keydown', handleTabKeyPress);
        menuElement.removeEventListener('keydown', handleEscapeKeyPress);
      };
    }
  }, [activeMenu, setActiveMenu]);

  return (
    <header
      role="banner"
      className={whiteHeader ? styles.whiteHeader : styles.header}
    >
      {activeMenu === 'Sitemap' && (
      <div className="block w-[100vw] h-[100vh] absolute top-[80px] left-0 backdrop-blur-sm">
        <div className="w-full h-full -bg--openfoundation-secondary opacity-20" />
      </div>
      )}
      <h1 className="sr-only">
        오픈에스지
      </h1>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop">
          <li>
            <Link className="px-open-md py-open-sm" to="/"><img className="w-[60px] tablet:w-[100px] desktop:w-[100px] mr-open-2xl" src={whiteHeader ? opensgLogoBlue : opensgLogo} alt="오픈에스지" /></Link>
          </li>
          {activeMenu !== 'Sitemap' && (
            <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('AboutUs')}>
              <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('AboutUs')}>About Us</button>
              {activeMenu === 'AboutUs' && (
              <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
                <ul className={whiteHeader ? styles.aboutMenuListWhite : styles.aboutMenuList}>
                  <MenuLink linkName="회사개요" linkAddress="/about" />
                  <MenuLink linkName="연혁" linkAddress="/history" />
                  <MenuLink linkName="직무소개" linkAddress="/team" />
                  <MenuLink linkName="오시는길" linkAddress="/location" />
                </ul>
              </div>
              )}
            </li>
          )}
          {activeMenu !== 'Sitemap' && (
          <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('Products')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Products')}>Products</button>
            {activeMenu === 'Products' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className={whiteHeader ? styles.productMenuListWhite : styles.productMenuList}>
                <li>
                  Solutions
                  <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-lg">
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Equipment Control System
                      </div>
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium ">
                        <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                        <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                        <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                        <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                        <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Smart Tools
                      </div>
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium  ">
                        <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                        <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                        <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1 -text-">
                        Monitoring Solution
                      </div>
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium ">
                        <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                      </ul>
                    </li>
                    <li className="text-open-font-medium ">
                      <div className="-text--open-accent-accent-1">
                        Comm Driver
                      </div>
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium ">
                        <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                    <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                    <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                    <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                  </ul>
                </li>
                <div className="w-[1px] -bg--openfoundation-secondary" />
                <li>
                  <div className="-text--open-accent-accent-1">
                    Industries
                  </div>
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph ">
                    <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                    <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                    <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                    <MenuLink linkName="항만" linkAddress="/industries/port" />
                  </ul>
                </li>
              </ul>
            </div>
            )}
          </li>
          )}
          {activeMenu !== 'Sitemap' && (
          <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('Support')}>
            <button className={styles.menuLink} type="button" onClick={() => handleMenuActive('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className={whiteHeader ? styles.supportMenuListWhite : styles.supportMenuList}>
                <MenuLink linkName="커뮤니티" linkAddress="/community" />
                <MenuLink linkName="라이브러리" linkAddress="/library" />
                <MenuLink linkName="고객문의" linkAddress="/contact" />
              </ul>
            </div>
            )}
          </li>
          )}
        </ul>
      </nav>
      <ul className="flex justify-center items-center gap-open-gutter-mobile tablet:gap-open-gutter-desktop desktop:gap-open-gutter-desktop">
        <li className="flex justify-center items-center px-open-md py-open-sm text-open-font-small desktop:text-open-font-medium tablet:text-open-font-medium">
          <div className="flex flex-row gap-open-md">
            <button className={activeLanguage !== 'ENG' ? '' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('KOR')}>KOR</button>
            <div className="w-[1px] -bg--openfoundation-tertiary" />
            <button className={activeLanguage === 'ENG' ? '' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('ENG')}>ENG</button>
          </div>
        </li>
        <li className="flex justify-center items-center">
          {activeMenu === 'Sitemap' ? (
            <>
              <button type="button" onClick={() => handleMenuActive(null)}><img className="w-[16px] tablet:w-[28px] desktop:w-[28px]" src={closeIcon} alt="사이트맵 닫기" /></button>
              <Sitemap sitemapRef={menuRef} />
              <SitemapMobile sitemapRef={menuRef} />
            </>
          ) : (
            <button type="button" onClick={() => handleMenuActive('Sitemap')}><img className="w-[16px] tablet:w-[28px] desktop:w-[28px]" src={hamburgerIcon} alt="사이트맵" /></button>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;

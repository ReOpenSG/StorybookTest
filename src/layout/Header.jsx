import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '@/components/Header/MenuLink';
import Sitemap from '@/components/Header/Sitemap';
import SitemapMobile from '@/components/Header/SitemapMobile';
import opensgLogo from '@/assets/header_opensg.png';
import hamburgerIcon from '@/assets/header_hamburger.svg';
import closeIcon from '@/assets/header_close.svg';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const menuRef = useRef(null);

  const handleLanguageActive = (lang) => {
    setActiveLanguage(lang);
  };

  const handleMenuActive = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuInactive = () => {
    setActiveMenu(null);
  };

  const location = useLocation();

  useEffect(() => {
    handleMenuInactive();
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
      className="fixed flex justify-between items-center w-full py-open-lg px-open-margin-mobile tablet:px-open-gutter-desktop desktop:px-open-4xl -bg--openfoundation-primary -text--openfoundation-secondary font-open-font text-open-font-large font-open-paragraph h-[50px] tablet:h-[80px] desktop:h-[80px] z-20"
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
            <Link className="px-open-md py-open-sm" to="/"><img className="w-[60px] tablet:w-[100px] desktop:w-[100px]" src={opensgLogo} alt="오픈에스지" /></Link>
          </li>
          {activeMenu !== 'Sitemap' && (
            <li className="px-open-md py-open-sm desktop:block tablet:block hidden" onMouseEnter={() => handleMenuActive('AboutUs')}>
              <button type="button" onClick={() => handleMenuActive('AboutUs')}>About Us</button>
              {activeMenu === 'AboutUs' && (
              <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
                <ul className="flex flex-col gap-open-md py-open-xl -bg--openfoundation-primary opacity-80 tablet:pl-[152px] desktop:pl-[186px]">
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
            <button type="button" onClick={() => handleMenuActive('Products')}>Products</button>
            {activeMenu === 'Products' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className="flex flex-row gap-open-xl px-open-xl py-open-xl text-open-font-large font-open-label -bg--openfoundation-primary opacity-80 tablet:pl-[268px] desktop:pl-[322px]">
                <li>
                  Solutions
                  <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-lg">
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Equipment Control System
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                        <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                        <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                        <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                        <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Smart Tools
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                        <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                        <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Monitoring Solution
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Comm Driver
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                    <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                    <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                    <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                  </ul>
                </li>
                <div className="w-[1px] -bg--openfoundation-secondary" />
                <li className="text-[#FFE500]">
                  Industries
                  <ul className="flex flex-col items-center pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary">
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
            <button type="button" onClick={() => handleMenuActive('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className="flex flex-col gap-open-md px-open-xl py-open-xl text-open-font-large -bg--openfoundation-primary opacity-80 tablet:pl-[364px] desktop:pl-[440px]">
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
            <button className={activeLanguage !== 'ENG' ? '-text--openfoundation-secondary' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('KOR')}>KOR</button>
            <div className="w-[1px] -bg--openfoundation-tertiary" />
            <button className={activeLanguage === 'ENG' ? '-text--openfoundation-secondary' : '-text--openfoundation-tertiary'} type="button" onClick={() => handleLanguageActive('ENG')}>ENG</button>
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

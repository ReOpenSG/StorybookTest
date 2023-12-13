import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuLink from '@/components/Header/MenuLink';
import Sitemap from '@/components/Header/Sitemap';
import SitemapMobile from '@/components/Header/SitemapMobile';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

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
      className="fixed flex justify-between items-center w-full py-open-lg px-open-margin-mobile tablet:px-open-gutter-desktop desktop:px-open-4xl -bg--openfoundation-primary -text--openfoundation-secondary font-open-font text-open-font-large font-open-paragraph h-[80px] z-10"
    >
      <h1 className="sr-only">
        오픈에스지
      </h1>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-open-gutter-mobile desktop:gap-open-gutter-desktop">
          <li>
            <Link className="px-open-md py-open-sm" to="/"><img src="/src/assets/header_opensg.png" alt="오픈에스지" width={100} /></Link>
          </li>
          {activeMenu !== 'Sitemap' && (
            <li className="px-open-md py-open-sm mobile:hidden" onMouseEnter={() => handleMenuActive('AboutUs')}>
              <button type="button" onClick={() => handleMenuActive('AboutUs')}>About Us</button>
              {activeMenu === 'AboutUs' && (
              <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
                <ul className="flex flex-col gap-open-md py-open-xl -bg--openfoundation-primary opacity-80 tablet:pl-[150px] desktop:pl-[214px]">
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
          <li className="px-open-md py-open-sm mobile:hidden" onMouseEnter={() => handleMenuActive('Products')}>
            <button type="button" onClick={() => handleMenuActive('Products')}>Products</button>
            {activeMenu === 'Products' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className="flex flex-row gap-open-xl px-open-xl py-open-xl text-open-font-large font-open-label -bg--openfoundation-primary opacity-80 tablet:pl-[280px] desktop:pl-[362px]">
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
                        <MenuLink linkName="Open HSMS" linkAddress="solutions/Open HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <MenuLink linkName="AGV - Lift Type" linkAddress="/" />
                    <MenuLink linkName="AGV - Conveyor Type" linkAddress="/" />
                    <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/" />
                    <MenuLink linkName="AGV - 협동 Robot 탑재 Type" linkAddress="/" />
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <MenuLink linkName="Microsoft Hololens 2" linkAddress="/" />
                  </ul>
                </li>
                <div className="w-[1px] -bg--openfoundation-secondary" />
                <li className="text-[#FFE500]">
                  Industries
                  <ul className="flex flex-col items-center pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary">
                    <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                    <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                    <MenuLink linkName="자동차" linkAddress="/" />
                    <MenuLink linkName="2차전지" linkAddress="/industries/port" />
                    <MenuLink linkName="항만" linkAddress="/industries/semiconductor" />
                  </ul>
                </li>
              </ul>
            </div>
            )}
          </li>
          )}
          {activeMenu !== 'Sitemap' && (
          <li className="px-open-md py-open-sm mobile:hidden" onMouseEnter={() => handleMenuActive('Support')}>
            <button type="button" onClick={() => handleMenuActive('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]" ref={menuRef} onMouseLeave={handleMenuInactive}>
              <ul className="flex flex-col gap-open-md px-open-xl py-open-xl text-open-font-large -bg--openfoundation-primary opacity-80 tablet:pl-[390px] desktop:pl-[495px]">
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
        <li className="flex justify-center items-center px-open-md py-open-sm text-open-font-medium">
          KOR
        </li>
        <li className="flex justify-center items-center">
          {activeMenu === 'Sitemap' ? (
            <>
              <button type="button" onClick={() => handleMenuActive(null)}><img src="/src/assets/header_close.svg" alt="사이트맵 닫기" /></button>
              <Sitemap sitemapRef={menuRef} />
              <SitemapMobile sitemapRef={menuRef} />
            </>
          ) : (
            <button type="button" onClick={() => handleMenuActive('Sitemap')}><img src="/src/assets/header_hamburger.svg" alt="사이트맵" /></button>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;

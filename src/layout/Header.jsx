import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductLink from '@/components/Header/ProductLink';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header
      role="banner"
      className="fixed flex justify-between items-center w-full py-open-lg px-open-4xl -bg--openfoundation-primary -text--openfoundation-secondary font-open-font text-open-font-large font-open-paragraph h-[80px] z-10"
    >
      <h1 className="sr-only">
        오픈에스지
      </h1>
      <nav className="flex" onMouseLeave={handleMenuLeave}>
        <ul className="flex justify-center items-center gap-open-gutter-desktop">
          <li>
            <Link className="px-open-md py-open-sm" to="/"><img src="/src/assets/header_opensg.png" alt="오픈에스지" width={100} /></Link>
          </li>
          <li className="px-open-md py-open-sm" onMouseEnter={() => handleMenuHover('AboutUs')}>
            <button type="button" onClick={() => handleMenuHover('AboutUs')}>About Us</button>
            {activeMenu === 'AboutUs' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]">
              <ul className="flex flex-col gap-open-md py-open-xl text-open-font-large -bg--openfoundation-primary opacity-80 pl-[225px]">
                <li>
                  <Link to="/about">
                    회사개요
                  </Link>
                </li>
                <li>
                  <Link to="/history">연혁</Link>
                </li>
                <li>
                  <Link to="/team">직무소개</Link>
                </li>
                <li>
                  <Link to="/location">오시는길</Link>
                </li>
              </ul>
            </div>
            )}
          </li>
          <li className="px-open-md py-open-sm" to="/solutions" onMouseEnter={() => handleMenuHover('Products')}>
            <button type="button" onClick={() => handleMenuHover('Products')}>Products</button>
            {activeMenu === 'Products' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]">
              <ul className="flex flex-row gap-open-2xl px-open-xl py-open-xl text-open-font-large font-open-label -bg--openfoundation-primary opacity-80 pl-[365px]">
                <li>
                  Solutions
                  <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-xl">
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Equipment Control System
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <ProductLink productName="ACS/FMS" productTooltip="AGV Control System / Fleet Management System" />
                        <ProductLink productName="OCS" productTooltip="OHT Control System" />
                        <ProductLink productName="SCS" productTooltip="Stocker Control System" />
                        <ProductLink productName="CCS" productTooltip="Conveyor Control System" />
                        <ProductLink productName="IDX Controller" productTooltip="Index Control System" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Smart Tools
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <ProductLink productName="Map Designer" />
                        <ProductLink productName="ACS Simulator" productTooltip="AGV Control System Simulator" />
                        <ProductLink productName="SCS Simulator" productTooltip="Stocker Control System Simulator" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Monitoring Solution
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <ProductLink productName="AIMS" productTooltip="Advanced Integrated Monitoring Solution" />
                      </ul>
                    </li>
                    <li className="text-[#3FA9F5] text-open-font-medium ">
                      Comm Driver
                      <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium -text--openfoundation-secondary">
                        <ProductLink productName="Open HSMS" />
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Smart Machine
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <li>AGV - Lift Type</li>
                    <li>AGV - Lift Type</li>
                    <li>AGV - Lift Type</li>
                    <li>AGV - Lift Type</li>
                  </ul>
                </li>
                <li>
                  Smart Device
                  <ul className="flex flex-col pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph">
                    <li>Microsoft Hololens 2</li>
                  </ul>
                </li>
                <div className="w-[1px] -bg--openfoundation-secondary" />
                <li className="text-[#FFE500]">
                  Industries
                  <ul className="flex flex-col items-center pl-open-sm pt-open-md gap-open-md text-open-font-medium font-open-paragraph -text--openfoundation-secondary">
                    <li>
                      <Link to="/industries/semiconductor">반도체</Link>
                    </li>
                    <li>
                      <Link to="/industries/display">디스플레이</Link>
                    </li>
                    <li>
                      <Link to="/industries/">자동차</Link>
                    </li>
                    <li>
                      <Link to="/industries/battery">2차전지</Link>
                    </li>
                    <li>
                      <Link to="/industries/port">항만</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            )}
          </li>
          <li className="px-open-md py-open-sm" to="/community" onMouseEnter={() => handleMenuHover('Support')}>
            <button type="button" onClick={() => handleMenuHover('Support')}>Support</button>
            {activeMenu === 'Support' && (
            <div className="absolute left-0 top-[80px] w-full backdrop-blur-[2px]">
              <ul className="flex flex-col gap-open-md px-open-xl py-open-xl text-open-font-large -bg--openfoundation-primary opacity-80 pl-[505px]">
                <li><Link to="/community">커뮤니티</Link></li>
                <li><Link to="/library">라이브러리</Link></li>
                <li><Link to="/contact">고객문의</Link></li>
              </ul>
            </div>
            )}
          </li>
        </ul>
      </nav>
      <ul className="flex justify-center items-center gap-open-gutter-desktop px-4">
        <li className="flex justify-center items-center px-open-md py-open-sm text-open-font-medium">
          KOR
        </li>
        <li className="flex justify-center items-center">
          <button type="button" onClick={() => handleMenuHover('Sitemap')}><img src="/src/assets/header_hamburger.svg" alt="사이트맵" /></button>
          {activeMenu === 'Sitemap' && (
            <div className="absolute left-0 top-[80px] w-full" onMouseLeave={handleMenuLeave}>
              <ul className="flex flex-col gap-open-md px-open-xl py-open-xl text-open-font-large -bg--openfoundation-primary">
                <li>이곳에 사이트맵을 구현할 예정입니다.</li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;

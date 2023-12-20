import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '@/components/Header/MenuLink';
import styles from '@/components/Header/Sitemap.module.css';

function Sitemap({ sitemapRef }) {
  return (
    <div className="tablet:block desktop:block hidden absolute left-0 top-[80px] w-full" ref={sitemapRef}>
      <ul className={styles.sitemapList}>
        <div className="flexWrapper flex flex-col">
          <li className="px-open-md py-open-sm text-open-font-xl font-open-heading">
            <div>About Us</div>
            <ul className={styles.aboutUsList}>
              <MenuLink linkName="회사개요" linkAddress="/about" />
              <MenuLink linkName="연혁" linkAddress="/history" />
              <MenuLink linkName="직무소개" linkAddress="/team" />
              <MenuLink linkName="오시는길" linkAddress="/location" />
            </ul>
          </li>
          <li className="px-open-md py-open-sm text-open-font-xl font-open-heading">
            <div>Support</div>
            <ul className={styles.supportList}>
              <MenuLink linkName="커뮤니티" linkAddress="/community" />
              <MenuLink linkName="라이브러리" linkAddress="/library" />
              <MenuLink linkName="고객문의" linkAddress="/contact" />
            </ul>
          </li>
        </div>
        <li className="px-open-md py-open-sm text-open-font-xl font-open-heading">
          <div>Products</div>
          <div className="">
            <ul className="flex flex-row gap-open-xl py-open-xl text-open-font-large font-open-label border-t-[1px] -border--openfoundation-secondary">
              <li>
                <div>Solutions</div>
                <ul className="font-open-paragraph flex flex-col pt-open-lg gap-open-lg">
                  <li className="-text--open-accent-accent-1 text-open-font-medium ">
                    <div>Equipment Control System</div>
                    <ul className={styles.productList}>
                      <MenuLink linkName="ACS/FMS" tooltip="AGV Control System / Fleet Management System" linkAddress="solutions/ACS" />
                      <MenuLink linkName="OCS" tooltip="OHT Control System" linkAddress="solutions/OCS" />
                      <MenuLink linkName="SCS" tooltip="Stocker Control System" linkAddress="solutions/SCS" />
                      <MenuLink linkName="CCS" tooltip="Conveyor Control System" linkAddress="solutions/CCS" />
                      <MenuLink linkName="IDX Controller" tooltip="Index Control System" linkAddress="solutions/IDX Controller" />
                    </ul>
                  </li>
                  <li className="-text--open-accent-accent-1 text-open-font-medium ">
                    <div>Smart Tools</div>
                    <ul className={styles.productList}>
                      <MenuLink linkName="Map Designer" linkAddress="solutions/Map Designer" />
                      <MenuLink linkName="ACS Simulator" tooltip="AGV Control System Simulator" linkAddress="solutions/ACS Simulator" />
                      <MenuLink linkName="SCS Simulator" tooltip="Stocker Control System Simulator" linkAddress="solutions/SCS Simulator" />
                    </ul>
                  </li>
                  <li className="-text--open-accent-accent-1 text-open-font-medium ">
                    <div>Monitoring Solution</div>
                    <ul className={styles.productList}>
                      <MenuLink linkName="AIMS" tooltip="Advanced Integrated Monitoring Solution" linkAddress="solutions/AIMS" />
                    </ul>
                  </li>
                  <li className="-text--open-accent-accent-1 text-open-font-medium ">
                    <div>Comm Driver</div>
                    <ul className={styles.productList}>
                      <MenuLink linkName="Open HSMS" linkAddress="solutions/HSMS" />
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <div>Smart Machine</div>
                <ul className={styles.productList}>
                  <MenuLink linkName="AGV - Lift Type1" linkAddress="/machines/Lift Type1" />
                  <MenuLink linkName="AGV - Lift Type2" linkAddress="/machines/Lift Type2" />
                  <MenuLink linkName="AGV - Fork-Lift Type" linkAddress="/machines/Fork-Lift Type" />
                  <MenuLink linkName="AGV - Foup Type" linkAddress="/machines/Foup Type" />
                </ul>
              </li>
              <li>
                Smart Device
                <ul className={styles.productList}>
                  <MenuLink linkName="Microsoft Hololens 2" linkAddress="/devices/Microsoft" />
                </ul>
              </li>
              <li className="-text--open-accent-accent-1 flex-1">
                <div>Industries</div>
                <ul className={styles.productList}>
                  <MenuLink linkName="반도체" linkAddress="/industries/semiconductor" />
                  <MenuLink linkName="디스플레이" linkAddress="/industries/display" />
                  <MenuLink linkName="2차전지" linkAddress="/industries/battery" />
                  <MenuLink linkName="항만" linkAddress="/industries/port" />
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

Sitemap.propTypes = {
  sitemapRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};

export default Sitemap;

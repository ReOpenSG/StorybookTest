import React from 'react';
import mapImage from '@/assets/location_map.png';
import LocationPinIcon from '@/components/Location/LocationPinIcon';
import mTowerImage from '@/assets/location_mTower.png';
import LocationContainer from '@/components/Location/LocationContainer';

function Location() {
  return (
    <div className="w-full flex flex-col -bg--openfoundation-primary">
      <div className="mapWrapper w-full relative">
        <img className="w-full block" src={mapImage} alt="세계지도" />
        <LocationPinIcon />
        <LocationPinIcon usa />
      </div>
      <section className="mb-open-5xl w-full h-full flex flex-col justify-center items-center desktop:px-open-margin-desktop tablet:px-open-margin-desktop px-open-gutter-mobile -bg--openfoundation-primary -text--openfoundation-secondary">
        <LocationContainer locationName="본사" locationAddress="우 18469 경기도 화성시 동탄첨단산업1로 51-9 엠타워 1201호" locationTel="031-373-2612" locationFax="031-377-2615" locationImage={mTowerImage} />
        <LocationContainer
          locationName="자동화 연구소"
          locationAddress="우 31094) 충청남도 천안시 서북구 백석동 1206 천안미래에이스하이테크시티 406호"
          locationTel="041-566-2612"
          locationFax="041-566-2613"
        />
        <LocationContainer locationName="오픈에스지 미국지사" locationAddress="미국 지사 주소가 들어갈 예정입니다." locationTel="미국 지사 전화번호" locationFax="미국 지사 팩스번호" />
      </section>
    </div>
  );
}

export default Location;

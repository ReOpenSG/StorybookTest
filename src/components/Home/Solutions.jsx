import React, { useState } from 'react';

function Solutions() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  return (
    <section className="hidden mx-auto flex-col items-center tablet:flex desktop:flex gap-open-5xl pt-open-6xl tablet:pt-open-7xl desktop:pt-open-7xl -text--openfoundation-white max-w-[1320px]">
      <div className="w-full flex justify-between">
        <h3 className="font-open-heading tablet:text-open-font-xxl desktop:text-open-font-xxl">
          OPEN Solutions
        </h3>
        <ul className="flex justify-center items-center gap-open-lg font-open-highlight tablet:text-open-font-small desktop:text-open-font-medium">
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(0)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 0 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              AIMS
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(1)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 1 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              ACS
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(2)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 2 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              CCS
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(3)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 3 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              SCS
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(4)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 4 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              IDX
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleItemClick(5)}
              className={`px-open-gutter-mobile py-open-sm rounded-3xl ${
                selectedItem === 5 ? '-bg--open-accent-accent-2' : ''
              }`}
            >
              OCS
            </button>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between gap-open-4xl">
        <div className="w-[240px] flex flex-col items-start gap-open-3xl">
          <h4 className="font-open-heading tablet:text-open-font-xxl desktop:text-open-font-xxxl">
            AIMS
          </h4>
          <p className="font-open-paragraph tablet:text-open-font-medium desktop:text-open-font-large">
            AIMS 에 관한 간략한 설명을 작성하는 란입니다. AIMS 에 관한 간략한 설명을 작성하는
            란입니다. AIMS 에 관한 간략한 설명을 작성하는 란입니다.{' '}
          </p>
          <button
            type="button"
            className="font-open-label tablet:text-open-font-medium desktop:text-open-font-large"
          >
            Learn More &gt;
          </button>
        </div>
        <div className="flex justify-center items-center tablet:w-[700px] desktop:w-[900px] h-[600px]">
          이미지
        </div>
      </div>
    </section>
  );
}

export default Solutions;

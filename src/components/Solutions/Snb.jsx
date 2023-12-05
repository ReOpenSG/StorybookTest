import React from 'react';

function Snb() {
  return (
    <aside className="desktop:block tablet:block hidden min-w-[120px] bg-red-300">
      <nav className="bg-blue-200 sticky top-[200px]">
        <ul className="flex flex-col gap-[16px] font-open-label text-open-font-large -text--open-gray-300">
          <li>
            <a className="Char px-2 py-1" href="#Char">
              제품 및 특징
            </a>
          </li>
          <li>
            <a className="Func px-2 py-1" href="#Func">
              기능
            </a>
          </li>
          <li>
            <a className="Effect px-2 py-1" href="#Effect">
              기대 효과
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Snb;

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      role="banner"
      className="fixed flex justify-between items-center w-full py-open-lg px-open-4xl -bg--openfoundation-primary -text--openfoundation-secondary font-open-font text-open-font-large font-open-paragraph z-10"
    >
      <h1 className="sr-only">
        오픈에스지
      </h1>
      <nav className="flex">
        <ul className="flex justify-center items-center gap-open-gutter-desktop my-1">
          <li className="px-open-md py-open-sm">
            <Link to="/"><img src="/src/assets/header_opensg.png" alt="오픈에스지" width={120} /></Link>
          </li>
          <li className="px-open-md py-open-sm">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-open-md py-open-sm">
            <Link to="/solutions">Products</Link>
          </li>
          <li className="px-open-md py-open-sm">
            <Link to="/community">Support</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex justify-center items-center gap-open-gutter-desktop px-4">
        <li className="flex justify-center items-center px-open-md py-open-sm text-open-font-medium">
          KOR
        </li>
        <li className="flex justify-center items-center">
          <button type="button"><img src="/src/assets/header_hamburger.svg" alt="사이트맵" /></button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

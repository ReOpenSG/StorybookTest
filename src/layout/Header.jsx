import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header
      role="banner"
      className="fixed h-[96px] flex justify-between items-center w-full py-5 px-[80px] bg-slate-900 text-white font-open-font z-10"
    >
      <nav className="flex">
        <h1 className="mx-8 text-2xl">
          {' '}
          <Link to="/">OPENSG</Link>
        </h1>
        <ul className="flex gap-10 my-1">
          <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
            <Link to="/about">About Us</Link>
          </li>
          <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
            <Link to="/solutions">Products</Link>
          </li>
          <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
            <Link to="/community">Support</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex gap-10 px-4">
        <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
          KOR
        </li>
        <li className="focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}">
          <button type="button">hamburger</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

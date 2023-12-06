import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex justify-center mx-auto font-open-font pt-[96px]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex justify-center mx-auto font-open-font pt-[96px]">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;

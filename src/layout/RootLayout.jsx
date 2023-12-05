import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center h-screen pt-[80px]">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;

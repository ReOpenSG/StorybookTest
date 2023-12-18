import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';

function RootLayout() {
  return (
    <>
      <Header />
      <main className="flex justify-center mx-auto font-open-font pt-[40px] tablet:pt-[80px] desktop:pt-[80px]">
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default RootLayout;

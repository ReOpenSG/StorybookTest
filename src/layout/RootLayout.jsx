import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '@/components/Common/Spinner';

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header />
      <main className="flex justify-center mx-auto font-open-font flex-1 w-full">
        <ScrollRestoration />
        <Suspense fallback={<Suspense />}>
          <Outlet />
        </Suspense>
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
    </div>
  );
}

export default RootLayout;

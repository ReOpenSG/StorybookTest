import {Outlet} from 'react-router-dom';
import Header from './Header';

function RootLayout() {
  return (
    <div className='flex flex-col min-h-full w-full'>
      <Header />
      <main className='flex justify-center items-center h-screen'>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

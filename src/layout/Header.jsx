import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header role='banner' className='h-[80px] flex justify-between w-full pt-4 fixed px-4'>
      <nav className='flex'>
        <h1 className='mx-8 text-2xl'>
          {' '}
          <Link to='/'>OPENSG</Link>
        </h1>
        <ul className='flex gap-10 my-1'>
          <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
            <Link to='/solutions'>Products</Link>
          </li>
          <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
            <Link to='/notice'>Support</Link>
          </li>
        </ul>
      </nav>
      <ul className='flex gap-10 my-1 px-4'>
        <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
          <Link to='/recruit' className='underline'>
            Recruit
          </Link>
        </li>
        <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
          KOR
        </li>
        <li className='focus:rounded focus:shadow-md focus:shadow-blue-600 active:text-{#373e6a}'>
          <button type='button'>hamburger</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;

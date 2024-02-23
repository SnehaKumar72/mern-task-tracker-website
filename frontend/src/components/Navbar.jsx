import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';

const Navbar = () => {
  const authState = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className='flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center'>
        <div className='flex items-center'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/8323/8323547.png'
            alt='Logo'
            className='h-8 mr-2'
          /> {/* Replace the base64 encoded data with your image source */}
         <h2 className='cursor-pointer text-primary font-serif text-3xl font-medium'>
  <Link to="/">
    <span style={{ color: '#05E39C' }}>Pro</span>
    <span style={{ color: '#FE646F' }}>di</span>
    <span style={{ color: '#0593FC' }}>gi</span>
    <span style={{ color: '#FFC344' }}>Ta</span>
    <span style={{ color: '#978ECBza' }}>sk</span>

  </Link>
</h2>
        </div>
        <ul className='hidden md:flex gap-2 uppercase text-1xl font-medium'>
          <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-100 transition rounded-sm'>
            <Link to="/">Home</Link>
          </li>
          <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-100 transition rounded-sm'>
            <Link to="/">About Us</Link>
          </li>
          <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-100 transition rounded-sm'>
          <div id="bottom"></div>
            <Link to="/#bottom">Contact</Link>
          </li>
          {authState.isLoggedIn ? (
            <>
              <li className="bg-blue-600 text-white hover:bg-blue-600 font-medium rounded-md">
                <Link to='/tasks/add' className='block w-full h-full px-4 py-2'> <i className="fa-solid fa-plus"></i> Add task </Link>
              </li>
              <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
            </>
          ) : (
            <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-100  transition rounded-sm'><Link to="/login">Login</Link></li>
          )}
        </ul>
        <span className='md:hidden cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-bars"></i></span>

        {/* Navbar displayed as sidebar on smaller screens */}
        <div className={`absolute md:hidden right-0 top-0 bottom-0 transition ${(isNavbarOpen === true) ? 'translate-x-0' : 'translate-x-full'} bg-gray-100 shadow-md w-screen sm:w-9/12 h-screen`}>
          <div className='flex'>
            <span className='m-4 ml-auto cursor-pointer' onClick={toggleNavbar}><i className="fa-solid fa-xmark"></i></span>
          </div>
          <ul className='flex flex-col gap-4 uppercase font-medium text-center'>
            <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-200  transition rounded-sm'>
              <Link to="/">Home</Link>
            </li>
            <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-200  transition rounded-sm'>
              <Link to="/">About Us</Link>
            </li>
            <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-200  transition rounded-sm'>
              <Link to="/#bottom">Contact</Link>
              <div id="bottom"></div>
            </li>
            {authState.isLoggedIn ? (
              <>
                <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium transition py-2 px-3">
                  <Link to='/tasks/add' className='block w-full h-full'> <i className="fa-solid fa-plus"></i> Add task </Link>
                </li>
                <li className='py-2 px-3 cursor-pointer hover:bg-gray-200  transition rounded-sm' onClick={handleLogoutClick}>Logout</li>
              </>
            ) : (
              <li className='py-2 px-3 cursor-pointer text-primary hover:bg-gray-200  transition rounded-sm'><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;

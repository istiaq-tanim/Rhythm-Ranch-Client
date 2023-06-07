import { useState } from "react";
import {
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div className='bg-rose-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between'>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>
          <span className='ml-2 text-xl font-primary  font-bold tracking-wide text-gray-800'>
          Rhythm <span className="text-blue-500 ">Ranch</span>
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li className="font-bold font-secondary">
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Home
            </NavLink>
          </li>
          <li className="font-bold font-secondary">
            <NavLink
              to='/instructor'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Instructors
            </NavLink>
          </li>
          <li className="font-bold font-secondary">
            <NavLink
              to='/classes'
              className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
            >
              Classes
            </NavLink>
          </li>
            <li className='font-bold font-secondary'>
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
              >
                Login
              </NavLink>
            </li>
         
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {menuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <span className='ml-2 text-xl font-bold font-primary tracking-wide text-gray-800 uppercase'>
                      Rhythm <span className="text-blue-500 ">Ranch</span>
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li className="font-bold">
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li className='font-bold'>
                        <NavLink
                          to='/login'
                          className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
                        >
                          Login
                        </NavLink>
                      </li>
                   
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
    


export default Navbar;
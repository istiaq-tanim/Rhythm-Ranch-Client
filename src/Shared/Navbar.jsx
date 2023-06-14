
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from 'react';
import useInstructor from '../hooks/useInstructor';
import useAdmin from '../hooks/useAdmin';



const Navbar = () => {
  const { user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructor()


  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  const handleToggle = (event) => {
    if (event.target.checked) {
      setTheme("dark")
    }
    else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    const localTheme = localStorage.getItem("theme")
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme])
  const handleLogout = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error.message))
  }


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

          {user ?
            <>
              <span className="font-bold font-secondary">
                {
                  isAdmin ? <NavLink to='/dashboard/manageUser' className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>DashBoard</NavLink>
                    : isInstructor ?
                      <NavLink to='/dashboard/addClass' className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                        DashBoard</NavLink> :
                      <NavLink to='/dashboard/studentClass' className={({ isActive }) => (isActive ? 'text-blue-500' : '')}>
                        DashBoard</NavLink>
                }

              </span>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip-success tooltip" data-tip={user.displayName}>
                <div className="w-10 rounded-full" >
                  <img src={user.photoURL} />
                </div>
              </label>

              <button onClick={handleLogout} className=' btn btn-info py-0 px-2 font-displayRob'>Sign out</button>
            </> :
            <li className='font-secondary font-semibold font-displayRob'>
              <NavLink
                to='/login'
                className={({ isActive }) => (isActive ? 'text-blue-500' : '')}
              >
                Login
              </NavLink>
            </li>
          }

          <label className="swap swap-rotate">


            <input onChange={handleToggle} type="checkbox" />


            <svg className="swap-on fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>


            <svg className="swap-off fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

          </label>

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
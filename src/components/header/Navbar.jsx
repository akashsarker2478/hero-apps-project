import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import gitLogo from '../../assets/gitLogo.png'
import { Link } from 'react-router';

const Navbar = () => {
     const links = <>
        <NavLink to={'/'} className={({isActive})=>
          isActive?'text-green-600 font-semibold border-b-2 border-green-600 pb-1':'text-gray-600 hover:text-green-600 pb-1'
        }><li className='m-2'>Home</li></NavLink>
        <NavLink to={'/apps'} className={({isActive})=>
          isActive?'text-green-600 font-semibold border-b-2 border-green-600 pb-1':'text-gray-600 hover:text-green-600 pb-1'
        }><li className='m-2'>Apps</li></NavLink>
        <NavLink to={'/installation'} className={({isActive})=>
          isActive?'text-green-600 font-semibold border-b-2 border-green-600 pb-1':'text-gray-600 hover:text-green-600 pb-1'
        }><li className='m-2'>Installation</li></NavLink>
    </>
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <Link to={'/'} className='flex gap-2 items-center'>
        <img className='w-[30px]' src={logo} alt="" />
        <h2 className='bg-gradient-to-b from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent text-xl font-bold'>HERO.IO</h2>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-gradient-to-b from-[#632ee3] to-[#9f62f2] rounded-xl text-white font-semibold mr-2"><img src={gitLogo} alt="" /> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;
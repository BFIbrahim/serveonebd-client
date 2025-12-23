import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Get Help</NavLink></li>
        <li><NavLink to="/">Help Others</NavLink></li>
        <li><NavLink to="/">How It Works</NavLink></li>
        <li><NavLink to="/">Dashboard</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl font-bold bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 text-transparent bg-clip-text  rounded-base px-4 py-2.5 text-center leading-5">SERVEONEBD</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a type='button' className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
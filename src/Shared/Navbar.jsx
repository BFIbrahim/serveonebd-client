import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/get-help">Get Help</NavLink></li>
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
                    <a className="text-secondary text-xl font-bold">SERVEONE<span className='text-primary'>BD</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a type='button' className="btn bg-primary text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
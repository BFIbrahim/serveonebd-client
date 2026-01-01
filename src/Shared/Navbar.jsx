import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { logOut, user } = useAuth()

    const hundleLogout = () => {
        logOut()
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Logout",
                    text: "User successfully loggedOut",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/get-help">Get Help</NavLink></li>
        <li><NavLink to="/help-other">Help Others</NavLink></li>
        <li><NavLink to="/work-process">How It Works</NavLink></li>
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
                    <Link to="/" className="text-secondary text-xl font-bold">SERVEONE<span className='text-primary'>BD</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link onClick={hundleLogout} type='button' className="btn bg-primary text-white">Logout</Link> : <Link to="/login" type='button' className="btn bg-primary text-white">Login</Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
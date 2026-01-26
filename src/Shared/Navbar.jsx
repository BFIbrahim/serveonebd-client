import React from 'react';
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegHandshake } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { GiWaterRecycling } from "react-icons/gi";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";




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
        <li><NavLink to="/"><TiHomeOutline className='text-[18px]' />Home</NavLink></li>
        <li><NavLink to="/about"><RiInformationLine className='text-[18px]' />About</NavLink></li>
        {
            user ? <li><NavLink to="/get-help"><FaRegHandshake className='text-[20px]' />Get Help</NavLink></li> : <li><NavLink to="/login"><FaRegHandshake className='text-[20px]' />Get Help</NavLink></li>
        }

        <li><NavLink to="/help-other"><BiDonateHeart className='text-[20px]' /> Help Others</NavLink></li>
        <li><NavLink to="/contact"><GrContact className='text-[18px]' />Contact</NavLink></li>
        <li><NavLink to="/dashboard"><MdOutlineSpaceDashboard className='text-[20px]' />Dashboard</NavLink></li>
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
                    <Link to="/" className="text-secondary md:text-xl font-bold flex items-center"><span><BiDonateHeart className='text-xl md:text-3xl font-bold text-primary' /></span>SERVEONE<span className='text-primary'>BD</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <Link onClick={hundleLogout} type='button' className="btn bg-primary text-white"><RiLogoutCircleLine className='text-[20px]' />Logout</Link> : <Link to="/login" type='button' className="btn bg-primary text-white"><IoMdLogIn className='text-[20px]' />Login</Link>

                    }

                    {
                        user ? <Link to='/profile'><FaUserCircle className='text-3xl mx-3 text-secondary'></FaUserCircle></Link> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
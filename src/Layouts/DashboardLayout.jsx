import React from 'react';
import { Link, Outlet } from 'react-router';
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlinePendingActions } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";





const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4">
                            <Link to="/" className="text-secondary text-xl font-bold">SERVEONE<span className='text-primary'>BD</span></Link>
                        </div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-4">
                        <Outlet></Outlet>
                    </div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-primary text-white is-drawer-close:w-14 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow">
                            {/* List item */}
                            <li>
                                <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                    <AiOutlineHome className='text-xl'/>
                                    <span className="is-drawer-close:hidden">Homepage</span>
                                </Link>

                                <Link to="/dashboard/mybookings" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="My Bookings">
                                    <IoIosListBox className='text-xl'/>
                                    <span className="is-drawer-close:hidden">My Bookings</span>
                                </Link>

                                <Link to="/dashboard/pending-requests" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Pending Requests">
                                    <MdOutlinePendingActions className='text-xl'/>
                                    <span className="is-drawer-close:hidden">PendingRequests</span>
                                </Link>

                                <Link to="/dashboard/be-volunteer" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Be a Volunteer">
                                    <FaHandHoldingHeart className='text-xl'/>
                                    <span className="is-drawer-close:hidden">Be a Volunteer</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
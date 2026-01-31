import React from "react";
import { NavLink, Outlet, Link } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { LuPanelRightClose } from "react-icons/lu";

import {
  MdOutlinePendingActions,
  MdAddBox,
  MdOutlineCampaign,
} from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import {
  FaHandHoldingHeart,
  FaUserCheck,
  FaUserClock,
  FaUserCircle,
} from "react-icons/fa";
import {
  HiOutlineClipboardList,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import useUserRole from "../hooks/useUserRole";

const navClass = ({ isActive }) =>
  `is-drawer-close:tooltip is-drawer-close:tooltip-right
   flex items-center gap-3 px-3 py-2 rounded-lg
   transition-all duration-200
   hover:bg-secondary/80
   ${isActive ? "bg-secondary text-white shadow-md" : ""}`;

const DashboardLayout = () => {
  const { role } = useUserRole();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost"
          >
            <LuPanelRightClose className="text-xl" />
          </label>

          <div className="px-4">
            <Link to="/" className="text-secondary text-xl font-bold">
              SERVEONE<span className="text-primary">BD</span>
            </Link>
          </div>
        </nav>

        <div className="p-4">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div
          className="flex min-h-full flex-col bg-primary text-white
                     is-drawer-close:w-14 is-drawer-open:w-64
                     transition-all duration-300"
        >
          <ul className="menu w-full grow">
            <li>
              <NavLink to="/" className={navClass}>
                <AiOutlineHome className="text-xl" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </NavLink>

              <NavLink to="/dashboard" end className={navClass}>
                <IoIosListBox className="text-xl" />
                <span className="is-drawer-close:hidden">
                  My Bookings
                </span>
              </NavLink>

              {(role === "admin" || role === "volunteer") && (
                <NavLink
                  to="/dashboard/my-campaigns"
                  className={navClass}
                >
                  <MdOutlineCampaign className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    My Campaigns
                  </span>
                </NavLink>
              )}

              {role !== "admin" && role !== "volunteer" && (
                <NavLink
                  to="/dashboard/be-volunteer"
                  className={navClass}
                >
                  <FaHandHoldingHeart className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Be a Volunteer
                  </span>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/dashboard/pending-requests"
                  className={navClass}
                >
                  <MdOutlinePendingActions className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Pending Requests
                  </span>
                </NavLink>
              )}

              {(role === "admin" || role === "volunteer") && (
                <NavLink
                  to="/dashboard/addNew-campaign"
                  className={navClass}
                >
                  <MdAddBox className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Add New Campaign
                  </span>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/dashboard/pending-volunteers"
                  className={navClass}
                >
                  <FaUserClock className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Pending Volunteers
                  </span>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/dashboard/active-volunteers"
                  className={navClass}
                >
                  <FaUserCheck className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Active Volunteers
                  </span>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/dashboard/pending-campaigns"
                  className={navClass}
                >
                  <HiOutlineClipboardList className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Pending Campaigns
                  </span>
                </NavLink>
              )}

              {role === "admin" && (
                <NavLink
                  to="/dashboard/urget-campaign"
                  className={navClass}
                >
                  <HiOutlineExclamationCircle className="text-xl" />
                  <span className="is-drawer-close:hidden">
                    Urgent Campaign
                  </span>
                </NavLink>
              )}
            </li>
          </ul>

          <div className="mt-auto w-full p-2">
            <NavLink to="/profile" className={navClass}>
              <FaUserCircle className="text-2xl" />
              <span className="is-drawer-close:hidden">Profile</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

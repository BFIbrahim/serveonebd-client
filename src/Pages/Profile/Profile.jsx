import React from "react";
import { Link } from "react-router";
import { FaUserCircle, FaTachometerAlt, FaHandsHelping } from "react-icons/fa";
import { MdCampaign, MdVolunteerActivism } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";

const Profile = () => {
  const { user } = useAuth();
  const { role, isLoading } = useUserRole();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 min-h-screen bg-base-200">
      <div className="max-w-5xl mx-auto">

        <div className="bg-base-100 rounded-2xl shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">

          <div className="flex flex-col items-center">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-primary"
              />
            ) : (
              <FaUserCircle className="text-8xl text-accent" />
            )}
            <span className="mt-3 badge badge-outline capitalize">
              {role}
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-secondary">
              {user?.displayName || "User"}
            </h2>
            <p className="text-accent">{user?.email}</p>

            <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                to="/dashboard"
                className="btn btn-primary text-white btn-sm flex items-center gap-2"
              >
                <FaTachometerAlt /> Go to Dashboard
              </Link>

              {role === "user" && (
                <Link
                  to="/dashboard/be-volunteer"
                  className="btn btn-outline btn-sm flex items-center gap-2"
                >
                  <MdVolunteerActivism /> Be a Volunteer
                </Link>
              )}

              {role === "volunteer" && (
                <Link
                  to="/dashboard/my-bookings"
                  className="btn btn-outline btn-sm flex items-center gap-2"
                >
                  <FaHandsHelping /> My Bookings
                </Link>
              )}

              {
                role === 'admin' || role === 'volunteer' ? <Link
                  to="/dashboard/addNew-campaign"
                  className="btn btn-outline btn-sm flex items-center gap-2"
                >
                  <MdCampaign /> Add Campaign
                </Link> : ""
              }
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

          <Link to="/dashboard" className="card bg-base-100 shadow hover:shadow-md transition">
            <div className="card-body text-center">
              <FaTachometerAlt className="text-3xl text-primary mx-auto" />
              <h3 className="font-semibold mt-2">Dashboard</h3>
            </div>
          </Link>

          <Link to="/help-other" className="card bg-base-100 shadow hover:shadow-md transition">
            <div className="card-body text-center">
              <FaHandsHelping className="text-3xl text-primary mx-auto" />
              <h3 className="font-semibold mt-2">Help Others</h3>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Profile;

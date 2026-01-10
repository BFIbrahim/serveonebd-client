import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ActiveVolunteers = () => {
  const axiosSecure = useAxiosSecure();
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: volunteers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["activeVolunteers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/role/volunteer");
      return res.data;
    },
  });

  const handleReject = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This volunteer will be changed back to a regular user.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, reject",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/users/${userId}/role`, { role: "user" });
          Swal.fire("Updated!", "Volunteer is now a regular user.", "success");
          refetch();
        } catch (error) {
          Swal.fire("Error", "Failed to update role.", "error");
          console.error(error);
        }
      }
    });
  };

  const filteredVolunteers = volunteers.filter((v) =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return <p className="text-center py-10">Loading active volunteers...</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-secondary">
        Active Volunteers
      </h2>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full md:w-1/3"
        />
      </div>

      <div className="hidden md:block overflow-x-auto rounded-xl shadow-sm">
        <table className="table table-zebra w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Applied At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredVolunteers.length > 0 ? (
              filteredVolunteers.map((v) => (
                <tr key={v._id}>
                  <td>{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td>{v.location}</td>
                  <td>{new Date(v.createdAt).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleReject(v._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No volunteers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {filteredVolunteers.length > 0 ? (
          filteredVolunteers.map((v) => (
            <div key={v._id} className="bg-base-100 p-4 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold">{v.name}</h3>
              <p className="text-sm text-gray-500">{v.email}</p>

              <div className="mt-2 space-y-1 text-sm">
                <p>
                  <span className="font-medium">Phone:</span> {v.phone}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {v.location}
                </p>
                <p>
                  <span className="font-medium">Applied:</span>{" "}
                  {new Date(v.createdAt).toLocaleDateString()}
                </p>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleReject(v._id)}
                  className="btn btn-sm btn-error text-white w-full"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-10">
            No volunteers found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ActiveVolunteers;

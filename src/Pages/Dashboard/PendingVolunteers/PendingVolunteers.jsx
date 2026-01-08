import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PendingVolunteers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: volunteers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pendingVolunteers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/volunteers/pending");
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    try {
      await axiosSecure.patch(`/volunteers/${id}/status`, {
        status: "approved",
      });
      Swal.fire("Approved!", "Volunteer has been approved.", "success");
      refetch();
    } catch {
      Swal.fire("Error", "Failed to approve volunteer", "error");
    }
  };

  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This volunteer request will be removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, remove",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.delete(`/volunteers/${id}`);
          Swal.fire("Removed!", "Volunteer request removed.", "success");
          refetch();
        } catch {
          Swal.fire("Error", "Failed to remove volunteer", "error");
        }
      }
    });
  };

  if (isLoading) {
    return <p className="text-center py-10">Loading pending volunteers...</p>;
  }

  return (
    <div className="p-4 md:p-8 min-h-screen bg-base-100">
      <h2 className="text-2xl font-bold mb-6 text-secondary">
        Pending Volunteers
      </h2>

      <div className="hidden md:block overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow-sm">
        <table className="table w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="rounded-tl-xl">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Applied At</th>
              <th className="rounded-tr-xl text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {volunteers.length > 0 ? (
              volunteers.map((v, idx) => (
                <tr key={v._id} className="hover">
                  <td>{idx + 1}</td>
                  <td className="font-semibold">{v.name}</td>
                  <td className="text-sm">{v.email}</td>
                  <td>{v.phone}</td>
                  <td>{v.location}</td>
                  <td className="text-sm">
                    {new Date(v.createdAt).toLocaleDateString()}
                  </td>
                  <td className="text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleApprove(v._id)}
                        className="btn btn-xs btn-success text-white"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleRemove(v._id)}
                        className="btn btn-xs btn-error text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-10 text-gray-400"
                >
                  No pending volunteers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {volunteers.map((v) => (
          <div
            key={v._id}
            className="bg-base-100 p-4 rounded-xl shadow border border-base-300"
          >
            <h3 className="text-lg font-bold">{v.name}</h3>
            <p className="text-sm text-gray-500">{v.email}</p>

            <div className="mt-3 space-y-1 text-sm">
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

            <div className="grid grid-cols-2 gap-2 mt-4">
              <button
                onClick={() => handleApprove(v._id)}
                className="btn btn-sm btn-success text-white w-full"
              >
                Approve
              </button>
              <button
                onClick={() => handleRemove(v._id)}
                className="btn btn-sm btn-error text-white w-full"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {volunteers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No pending volunteers found.
        </p>
      )}
    </div>
  );
};

export default PendingVolunteers;

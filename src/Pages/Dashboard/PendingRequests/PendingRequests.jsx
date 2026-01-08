import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { IoPersonAdd } from 'react-icons/io5';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const PendingRequests = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedRequest, setSelectedRequest] = useState(null);

  const { data: requests = [], refetch } = useQuery({
    queryKey: ['pending-requests'],
    queryFn: async () => {
      const res = await axiosSecure.get('/pending-requests');
      return res.data;
    },
  });

  const handleStatusChange = async (id, status) => {
    try {
      await axiosSecure.patch(`/requests/${id}/status`, { status });
      Swal.fire('Updated!', `Request has been ${status}`, 'success');
      refetch();
      setSelectedRequest(null)
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong', 'error');
      console.log(error)
    }
  };

  const handleAssignVolunteer = (id) => {
    Swal.fire({
      title: 'Assign Volunteer',
      input: 'text',
      inputLabel: 'Enter Volunteer Name',
      showCancelButton: true,
      confirmButtonText: 'Assign',
      preConfirm: async (volunteerName) => {
        if (!volunteerName) {
          Swal.showValidationMessage('Volunteer name is required');
        } else {
          try {
            await axiosSecure.patch(`/requests/${id}/assign-volunteer`, { volunteer: volunteerName });
            refetch();
            Swal.fire('Assigned!', `Volunteer ${volunteerName} has been assigned`, 'success');
          } catch (error) {
            Swal.fire('Error!', 'Failed to assign volunteer', 'error');
            console.log(error)
          }
        }
      },
    });
  };

  const getUrgencyBadge = (urgency) => {
    switch (urgency) {
      case 'Urgent':
        return 'badge badge-error';
      case 'Normal':
        return 'badge badge-warning';
      default:
        return 'badge badge-ghost';
    }
  };

  return (
    <div className="p-4 md:p-8 min-h-screen bg-base-100">
      <h2 className="text-2xl font-semibold text-secondary mb-6">Pending Requests</h2>

      <div className="hidden md:block overflow-x-auto rounded-xl border border-base-300 bg-base-100 shadow-sm">
        <table className="table w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="rounded-tl-xl">#</th>
              <th>Category</th>
              <th>Urgency</th>
              <th>Location</th>
              <th>Quantity / Details</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center rounded-tr-xl">Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.length > 0 ? (
              requests.map((req, idx) => (
                <tr key={req._id} className="hover">
                  <td>{idx + 1}</td>

                  <td className="font-semibold">{req.category}</td>

                  <td>
                    <span className={`${getUrgencyBadge(req.urgency)} badge-sm`}>
                      {req.urgency}
                    </span>
                  </td>

                  <td>{req.location}</td>

                  <td>
                    {req.category === 'Medicine'
                      ? req.quantityDuration
                      : req.category === 'Clothing'
                        ? req.clothingQuantity
                        : req.category === 'Food'
                          ? req.mealCount
                          : '-'}
                  </td>

                  <td className="text-sm">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>

                  <td>
                    <span className="badge badge-outline capitalize">
                      {req.status}
                    </span>
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => setSelectedRequest(req)}
                      className="btn btn-sm btn-primary text-white"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-400">
                  No pending requests found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {requests.length > 0 ? (
          requests.map((req) => (
            <div key={req._id} className="bg-white shadow rounded-xl p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{req.category}</h3>
                <span className={`${getUrgencyBadge(req.urgency)} capitalize`}>{req.urgency}</span>
              </div>
              <p>
                <strong>Location:</strong> {req.location}
              </p>
              <p>
                <strong>Quantity/Details:</strong>{' '}
                {req.category === 'Medicine'
                  ? req.quantityDuration
                  : req.category === 'Clothing'
                    ? req.clothingQuantity
                    : req.category === 'Food'
                      ? req.mealCount
                      : '-'}
              </p>
              <p>
                <strong>Status:</strong> {req.status}
              </p>
              <button
                onClick={() => setSelectedRequest(req)}
                className="btn btn-primary btn-sm text-white w-full"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="text-center py-6 text-gray-500">No pending requests</p>
        )}
      </div>

      {selectedRequest && (
        <div className="modal modal-open">
          <div className="modal-box border-t-8 border-primary max-w-md">
            <h3 className="font-bold text-2xl text-secondary mb-4">Request Details</h3>

            <div className="bg-base-200 p-4 rounded-lg space-y-2 mb-4">
              <p className="text-sm font-bold text-primary uppercase">{selectedRequest.category}</p>
              <p className="text-lg font-semibold">{selectedRequest.mealType || selectedRequest.clothingType || ''}</p>
              <p className="text-accent">{selectedRequest.location}</p>
              <p>
                <strong>Urgency:</strong> {selectedRequest.urgency}
              </p>
              <p>
                <strong>Quantity:</strong>{' '}
                {selectedRequest.category === 'Medicine'
                  ? selectedRequest.quantityDuration
                  : selectedRequest.category === 'Clothing'
                    ? selectedRequest.clothingQuantity
                    : selectedRequest.category === 'Food'
                      ? selectedRequest.mealCount
                      : '-'}
              </p>
              <p>
                <strong>Status:</strong> {selectedRequest.status}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => handleStatusChange(selectedRequest._id, 'approved')}
                className="btn btn-success text-white flex justify-between items-center"
              >
                Approve
              </button>
              <button
                onClick={() => handleStatusChange(selectedRequest._id, 'rejected')}
                className="btn btn-error text-white flex justify-between items-center"
              >
                Reject
              </button>
              <button
                onClick={() => handleAssignVolunteer(selectedRequest._id)}
                className="btn btn-outline flex justify-between items-center"
              >
                <IoPersonAdd className="text-xl" /> Assign Volunteer
              </button>
            </div>

            <div className="modal-action">
              <button
                onClick={() => setSelectedRequest(null)}
                className="btn btn-ghost btn-sm"
              >
                Close
              </button>
            </div>
          </div>
          <div
            className="modal-backdrop bg-black/30"
            onClick={() => setSelectedRequest(null)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default PendingRequests;

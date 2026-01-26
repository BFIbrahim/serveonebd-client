import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { IoChevronForwardOutline, IoBagHandle } from 'react-icons/io5';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyBookings = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(user)

    const { data: mybookings = [], refetch } = useQuery({
        queryKey: ['mybookings', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requests/email?email=${user.email}`);
            return res.data;
        },
    });


    const [selectedBooking, setSelectedBooking] = useState(null);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This booking will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#2dc653', // primary
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it',
            cancelButtonText: 'Cancel',
        });

        if (result.isConfirmed) {
            try {
                await axiosSecure.delete(`/requests/${id}`);

                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your booking has been deleted.',
                    icon: 'success',
                    confirmButtonColor: '#2dc653',
                });

                setSelectedBooking(null);
                refetch();

            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again.',
                    icon: 'error',
                });
                console.error(error);
            }
        }
    };

    const handleMarkCompleted = async (id) => {
        try {
            const result = await Swal.fire({
                title: 'Mark as Completed?',
                text: "This will mark the booking as completed.",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#2dc653',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, complete it',
                cancelButtonText: 'Cancel',
            });

            if (result.isConfirmed) {
                await axiosSecure.patch(`/requests/${id}/status`, { status: 'completed' });

                Swal.fire({
                    title: 'Updated!',
                    text: 'The booking has been marked as completed.',
                    icon: 'success',
                    confirmButtonColor: '#2dc653',
                });

                refetch();
                setSelectedBooking(null);
            }

        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again.',
                icon: 'error',
            });
        }
    };



    const getStatusBadge = (status) => {
        switch (status) {
            case 'pending':
                return 'badge badge-warning text-white font-semibold';
            case 'approved':
                return 'badge badge-success text-white font-semibold';
            case 'rejected':
                return 'badge badge-error text-white font-semibold';
            case 'matched':
                return 'badge badge-success text-white font-semibold';
            case 'completed':
                return 'badge badge-success text-white font-semibold';
            default:
                return 'badge badge-ghost text-white font-semibold';
        }
    };

    return (
        <div className="p-4 md:p-8 bg-base-100 min-h-screen">
            <div className='md:flex justify-between items-center mb-6 md:mb-0 lg:mb-0'>
                <h2 className="text-2xl font-semibold text-secondary mb-6">My Bookings</h2>

                <Link to='/get-help' className='btn btn-primary text-white '>Add new request</Link>
            </div>


            <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow">
                <table className="table table-zebra w-full">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th>#</th>
                            <th>Category</th>
                            <th>Urgency</th>
                            <th>Location</th>
                            <th>Quantity/Duration</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mybookings.length > 0 ? (
                            mybookings.map((item, index) => (
                                <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td className="font-medium">{item.category}</td>
                                    <td>{item.urgency}</td>
                                    <td>{item.location}</td>
                                    <td>
                                        {item.category === 'Medicine'
                                            ? item.quantityDuration
                                            : item.category === 'Clothing'
                                                ? item.clothingQuantity
                                                : item.category === 'Food'
                                                    ? item.mealCount
                                                    : '-'
                                        }
                                    </td>
                                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <span className={`${getStatusBadge(item.status)} capitalize`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="text-center flex justify-center gap-2">
                                        <button
                                            onClick={() => setSelectedBooking(item)}
                                            className="btn btn-sm btn-primary text-white"
                                        >
                                            View Details
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="text-center py-6 text-gray-500">
                                    <div>
                                        <p className="text-center py-6 text-gray-500">No bookings found</p>
                                        <Link to="/get-help" className='btn btn-primary text-white'>Add Help Requests</Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-4">
                {mybookings.length > 0 ? (
                    mybookings.map((item) => (
                        <div key={item._id} className="bg-white shadow rounded-xl p-4 space-y-2">
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold">{item.category}</h3>
                                <span className={`${getStatusBadge(item.status)} capitalize`}>
                                    {item.status}
                                </span>
                            </div>
                            <p>
                                <strong>Urgency:</strong> {item.urgency}
                            </p>
                            <p>
                                <strong>Location:</strong> {item.location}
                            </p>
                            <p>
                                <strong>Quantity/Duration:</strong> {item.quantityDuration}
                            </p>
                            <div className="flex gap-2 mt-2">
                                <button
                                    onClick={() => setSelectedBooking(item)}
                                    className="btn btn-sm btn-primary flex-1 text-white"
                                >
                                    View Details
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="btn btn-sm btn-error flex-1 text-white"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>
                        <p className="text-center py-6 text-gray-500">No bookings found</p>
                        <Link to="/get-help" className='btn btn-primary text-white flex justify-center md:flex-none'>Help Requests</Link>
                    </div>
                )}
            </div>

            {selectedBooking && (
                <div className="modal modal-open">
                    <div className="modal-box border-t-8 border-primary max-w-md">
                        <h3 className="font-bold text-2xl text-secondary mb-4">
                            Booking Details
                        </h3>

                        <div className="bg-base-200 p-4 rounded-lg space-y-2 mb-4">
                            <p className="text-sm font-bold text-primary uppercase">
                                {selectedBooking.category}
                            </p>

                            <p className="text-lg font-semibold">
                                {selectedBooking.mealType || selectedBooking.clothingType || ''}
                            </p>

                            <p className="text-accent">{selectedBooking.location}</p>

                            <p>
                                <strong>Urgency:</strong> {selectedBooking.urgency}
                            </p>

                            <p>
                                <strong>Quantity:</strong>{" "}
                                {selectedBooking.category === 'Medicine'
                                    ? selectedBooking.quantityDuration
                                    : selectedBooking.category === 'Clothing'
                                        ? selectedBooking.clothingQuantity
                                        : selectedBooking.category === 'Food'
                                            ? selectedBooking.mealCount
                                            : '-'}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => handleMarkCompleted(selectedBooking._id)}
                                className="btn btn-primary text-white flex justify-between items-center"
                            >
                                <div className="flex items-center gap-2">Mark as Completed</div>
                                <IoChevronForwardOutline />
                            </button>

                            <button onClick={() => handleDelete(selectedBooking._id)} className="btn btn-outline border-secondary text-secondary flex justify-between items-center">
                                <div className="flex items-center gap-2">Cancel Booking</div>
                                <IoBagHandle className="text-xl" />
                            </button>
                        </div>

                        <div className="modal-action">
                            <button
                                onClick={() => setSelectedBooking(null)}
                                className="btn btn-ghost btn-sm"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    <div
                        className="modal-backdrop bg-black/20"
                        onClick={() => setSelectedBooking(null)}
                    ></div>
                </div>
            )}

        </div>
    );
};

export default MyBookings;

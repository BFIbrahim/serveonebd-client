import React, { useState } from 'react';
import { FaPills, FaUtensils, FaTshirt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { IoCheckmarkCircle, IoBagHandle, IoChevronForwardOutline } from 'react-icons/io5';
import useAxios from '../hooks/useAxios';
import Swal from 'sweetalert2';

const HelpRequestCard = ({ request, refetchRequests }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [matched, setMatched] = useState(false);
    const axios = useAxios();

    const getIcon = category => {
        switch (category) {
            case 'Medicine':
                return <FaPills />;
            case 'Food':
                return <FaUtensils />;
            case 'Clothing':
                return <FaTshirt />;
            default:
                return null;
        }
    };

    const handleHelp = async (type) => {
        try {
            // Call server to mark this request as matched
            await axios.patch(`/requests/${request._id}/status`, { status: 'matched' });

            Swal.fire({
                icon: 'success',
                title: 'Thank You!',
                text: 'You have successfully committed to help this request.',
                confirmButtonColor: '#2dc653'
            });

            setMatched(true); // mark as matched locally
            setModalOpen(false);
            if (refetchRequests) refetchRequests();
        } catch (err) {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Something went wrong. Please try again.',
            });
        }
    };


    return (
        <div className="card bg-base-100 shadow-xl border border-base-300 relative overflow-hidden">

            {/* Matched overlay */}
            {matched && (
                <div className="absolute inset-0 bg-primary/90 z-10 flex flex-col items-center justify-center text-white">
                    <IoCheckmarkCircle className="text-6xl mb-2" />
                    <span className="text-xl font-bold">Matched</span>
                </div>
            )}

            <div className="card-body p-6">
                <div className="flex justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-lg text-white text-xs font-bold ${request.category === 'Medicine'
                        ? 'bg-blue-600'
                        : request.category === 'Food'
                            ? 'bg-orange-500'
                            : 'bg-purple-600'
                        }`}>
                        {getIcon(request.category)} {request.category}
                    </div>
                    <span className={`badge badge-sm ${request.urgency === 'Urgent' ? 'badge-error' : 'badge-ghost'}`}>
                        {request.urgency}
                    </span>
                </div>

                <h3 className="text-xl font-bold h-14 line-clamp-2">
                    {request.items || request.medicineNames || request.clothingType || request.mealType}
                </h3>

                <div className="space-y-2 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <FaRegClock /> {request.quantityDuration || request.clothingQuantity || request.mealCount || '-'}
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                        <FaMapMarkerAlt /> {request.location}
                    </div>
                </div>

                <div className="card-actions mt-6 pt-4">
                    <button
                        onClick={() => setModalOpen(true)}
                        disabled={matched}
                        className="btn btn-primary w-full text-white"
                    >
                        {matched ? 'Already Helping' : 'I Can Help'}
                    </button>
                </div>
            </div>

            {modalOpen && (
                <div className="modal modal-open">
                    <div className="modal-box border-t-8 border-primary">
                        <h3 className="font-bold text-2xl text-secondary">Confirm Assistance</h3>
                        <div className="py-4 space-y-4">
                            <div className="bg-base-200 p-4 rounded-lg">
                                <p className="text-sm font-bold text-primary uppercase">{request.category}</p>
                                <p className="text-lg font-semibold">
                                    {request.items || request.medicineNames || request.clothingType || request.mealType}
                                </p>
                                <p className="text-accent">{request.location}</p>
                            </div>
                            <p className="text-sm text-gray-500 italic">How would you like to provide this help?</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button onClick={() => handleHelp('deliver')} className="btn btn-primary ...">I Will Deliver / Buy</button>
                            <button onClick={() => handleHelp('alreadyHave')} className="btn btn-outline ...">I Already Have This</button>

                        </div>
                        <div className="modal-action">
                            <button onClick={() => setModalOpen(false)} className="btn btn-ghost btn-sm">Cancel</button>
                        </div>
                    </div>
                    <div className="modal-backdrop bg-black/50" onClick={() => setModalOpen(false)}></div>
                </div>
            )}
        </div>
    );
};

export default HelpRequestCard;

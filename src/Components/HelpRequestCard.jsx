import React from 'react';
import { FaPills, FaUtensils, FaTshirt, FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import { IoCheckmarkCircle } from 'react-icons/io5';

const HelpRequestCard = ({ request, onHelpClick, matched }) => {

    const getIcon = (cat) => {
        switch (cat) {
            case 'Medicine': return <FaPills />;
            case 'Food': return <FaUtensils />;
            case 'Clothing': return <FaTshirt />;
            default: return null;
        }
    };

    return (
        <div className="card bg-base-100 shadow-xl border border-base-300 relative overflow-hidden">

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

                    <span className={`badge badge-sm ${request.urgency === 'Urgent' ? 'badge-error' : 'badge-ghost'
                        }`}>
                        {request.urgency}
                    </span>
                </div>

                <h3 className="text-xl font-bold h-14 line-clamp-2">
                    {request.items}
                </h3>

                <div className="space-y-2 mt-4 text-sm">
                    <div className="flex items-center gap-2">
                        <FaRegClock /> {request.details}
                    </div>
                    <div className="flex items-center gap-2 font-medium">
                        <FaMapMarkerAlt /> {request.location}
                    </div>
                </div>

                <div className="card-actions mt-6 pt-4">
                    <button
                        onClick={() => onHelpClick && onHelpClick(request)}
                        className="btn btn-primary w-full text-white"
                    >
                        I Can Help
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HelpRequestCard;

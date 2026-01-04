import React, { useState } from 'react';
import HelpRequestCard from '../../../Components/HelpRequestCard';
import { Link } from 'react-router';

const HelpRequest = () => {

    const [selectedRequest, setSelectedRequest] = useState(null);
    const [matchedIds, setMatchedIds] = useState([]);


    const requests = [
        {
            id: 1,
            category: 'Medicine',
            items: 'Insulin, Metformin',
            details: '5 days supply',
            location: 'Dhanmondi, Dhaka',
            urgency: 'Urgent',
            timestamp: '2 mins ago',
        },
        {
            id: 2,
            category: 'Food',
            items: 'Vegetarian Meals',
            details: 'For 4 people',
            location: 'Gulshan, Dhaka',
            urgency: 'Normal',
            timestamp: '15 mins ago',
        },
        {
            id: 3,
            category: 'Clothing',
            items: 'Winter Jackets',
            details: 'Size L, 2 pieces',
            location: 'Banani, Dhaka',
            urgency: 'Normal',
            timestamp: '1 hour ago',
        },
    ];

    const handleHelpConfirm = (id) => {
        setMatchedIds(prev => [...prev, id]);
        setSelectedRequest(null);
    };


    return (
        <section className="py-12 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-primary">
                        Help Requests Near You
                    </h2>
                    <p className="text-accent mt-2">
                        Choose a request and make someone’s day better
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {requests.map(request => (
                        <HelpRequestCard
                            key={request._id}
                            request={request}
                            matched={matchedIds.includes(request.id)}
                            onHelpClick={(req) => setSelectedRequest(req)}
                        />

                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link to='/help-other'><button
                        className="btn btn-primary text-white px-10"
                    >
                        View More Requests
                    </button></Link>

                </div>

            </div>

            {selectedRequest && (
                <div className="modal modal-open">
                    <div className="modal-box border-t-8 border-primary">
                        <h3 className="font-bold text-2xl text-secondary">
                            Confirm Assistance
                        </h3>

                        <div className="py-4 space-y-4">
                            <div className="bg-base-200 p-4 rounded-lg">
                                <p className="text-sm font-bold text-primary uppercase">
                                    {selectedRequest.category}
                                </p>
                                <p className="text-lg font-semibold">
                                    {selectedRequest.items}
                                </p>
                                <p className="text-accent">
                                    {selectedRequest.location}
                                </p>
                            </div>

                            <p className="text-sm text-gray-500 italic">
                                How would you like to provide this help?
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => handleHelpConfirm(selectedRequest.id)}
                                className="btn btn-primary text-white"
                            >
                                I Will Deliver / Buy
                            </button>
                            <button className="btn btn-outline border-secondary text-secondary">
                                I Already Have This
                            </button>
                        </div>

                        <div className="modal-action">
                            <button
                                onClick={() => setSelectedRequest(null)}
                                className="btn btn-ghost btn-sm"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>

                    <div
                        className="modal-backdrop bg-black/30"
                        onClick={() => setSelectedRequest(null)}
                    ></div>
                </div>
            )}

        </section>
    );
};

export default HelpRequest;

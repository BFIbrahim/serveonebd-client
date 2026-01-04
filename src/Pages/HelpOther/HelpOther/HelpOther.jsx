import React, { useState } from 'react';
import { FaPills, FaUtensils, FaTshirt, FaMapMarkerAlt, FaRegClock, FaSearch, FaFilter } from 'react-icons/fa';
import { IoCheckmarkCircle, IoBagHandle, IoChevronForwardOutline } from 'react-icons/io5';
import HelpRequestCard from '../../../Components/HelpRequestCard';

const HelpOther = () => {
  const [filter, setFilter] = useState('All');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);

  const initialRequests = [
    { id: 1, category: 'Medicine', items: 'Insulin, Metformin', details: '5 days supply', location: 'Dhanmondi, Dhaka', urgency: 'Urgent', timestamp: '2 mins ago' },
    { id: 2, category: 'Food', items: 'Vegetarian Meals', details: '4 people', location: 'Gulshan, Dhaka', urgency: 'Normal', timestamp: '15 mins ago' },
    { id: 3, category: 'Clothing', items: 'Winter Jackets', details: 'Size L, 2 pieces', location: 'Banani, Dhaka', urgency: 'Normal', timestamp: '1 hour ago' },
  ];

  const filteredRequests = filter === 'All' ? initialRequests : initialRequests.filter(r => r.category === filter);

  const handleAction = (id) => {
    setMatchedIds([...matchedIds, id]);
    setSelectedRequest(null);
  };


  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary">Help Others</h2>
            <p className="text-accent">Find people nearby who need your support</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Medicine', 'Food', 'Clothing'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`btn btn-sm rounded-full ${filter === cat ? 'btn-primary text-white' : 'btn-ghost bg-base-100 shadow-sm'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map(request => (
            <HelpRequestCard
              key={request.id}
              request={request}
              matched={matchedIds.includes(request.id)}
              onHelpClick={(req) => setSelectedRequest(req)}
            />
          ))}
        </div>


        {selectedRequest && (
          <div className="modal modal-open">
            <div className="modal-box border-t-8 border-primary">
              <h3 className="font-bold text-2xl text-secondary">Confirm Assistance</h3>
              <div className="py-4 space-y-4">
                <div className="bg-base-200 p-4 rounded-lg">
                  <p className="text-sm font-bold text-primary uppercase">{selectedRequest.category}</p>
                  <p className="text-lg font-semibold">{selectedRequest.items}</p>
                  <p className="text-accent">{selectedRequest.location}</p>
                </div>
                <p className="text-sm text-gray-500 italic">How would you like to provide this help?</p>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleAction(selectedRequest.id)}
                  className="btn btn-primary text-white flex justify-between items-center"
                >
                  <div className="flex items-center gap-2"> I Will Deliver / Buy</div>
                  <IoChevronForwardOutline />
                </button>
                <button
                  onClick={() => handleAction(selectedRequest.id)}
                  className="btn btn-outline border-secondary text-secondary flex justify-between items-center"
                >
                  <div className="flex items-center gap-2"> I Already Have This</div>
                  <IoBagHandle className="text-xl" />
                </button>
              </div>
              <div className="modal-action">
                <button onClick={() => setSelectedRequest(null)} className="btn btn-ghost btn-sm">Cancel</button>
              </div>
            </div>
            <div className="modal-backdrop bg-black/50" onClick={() => setSelectedRequest(null)}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpOther;
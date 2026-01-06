import React, { useState } from 'react';
import { IoBagHandle, IoChevronForwardOutline } from 'react-icons/io5';
import HelpRequestCard from '../../../Components/HelpRequestCard';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../../hooks/useAxios';

const HelpOther = () => {
  const [filter, setFilter] = useState('All');
  const  axios  = useAxios();

  // Fetch requests from server
  const { data: requests = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['helpRequests'],
    queryFn: async () => {
      const res = await axios.get('/requests/approved');
      return res.data;
    },
  });

  // Filter requests based on selected category
  const filteredRequests = filter === 'All' ? requests : requests.filter(r => r.category === filter);

  // Mark request as matched and close modal

  if (isLoading) return <p className="text-center py-10">Loading requests...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load requests</p>;

  return (
    <div className="min-h-screen bg-base-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
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

        {/* Requests grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRequests.map(request => (
            <HelpRequestCard
              key={request.id}
              request={request}
              refetchRequests={refetch}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default HelpOther;

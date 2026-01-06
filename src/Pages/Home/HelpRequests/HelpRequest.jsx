import React, { useState, useEffect } from "react";
import HelpRequestCard from "../../../Components/HelpRequestCard";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router";


const HelpRequest = () => {
  const [requests, setRequests] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [loading, setLoading] = useState(true);

  const axios = useAxios()

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await axios.get("/requests/approved");
        const latestThree = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setRequests(latestThree);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleHelpConfirm = (id) => {
    setMatchedIds((prev) => [...prev, id]);
  };

  if (loading) return <p className="text-center py-20 text-primary">Loading...</p>;

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
          {requests.map((request) => (
            <HelpRequestCard
              key={request._id}
              request={request}
              matched={matchedIds.includes(request._id)}
              onHelpClick={handleHelpConfirm}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/help-other">
            <button className="btn btn-primary text-white px-10">
              View More Requests
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HelpRequest;

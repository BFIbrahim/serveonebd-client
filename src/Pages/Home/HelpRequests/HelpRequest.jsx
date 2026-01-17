import React, { useState, useEffect } from "react";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router";

const LatestCampaignCard = ({ campaign }) => {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-md rounded-xl p-5">
      <h3 className="text-xl font-bold text-secondary mb-2">{campaign.title}</h3>
      <p className="text-sm text-accent mb-2 line-clamp-3">
        {campaign.description}
      </p>
      <div className="flex justify-between text-sm font-medium mt-2">
        <span className="text-primary">{campaign.category}</span>
        <span className="text-accent">{campaign.location}</span>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        Created By: {campaign.createdBy} |{" "}
        {new Date(campaign.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

const HelpRequest = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const axios = useAxios();

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const { data } = await axios.get("/campaigns?status=approved");
        const latestThree = data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 3);
        setCampaigns(latestThree);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [axios]);

  if (loading)
    return <p className="text-center py-20 text-primary">Loading campaigns...</p>;

  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary">
            Latest Campaigns
          </h2>
          <p className="text-accent mt-2">
            See the latest campaigns and support the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <LatestCampaignCard key={campaign._id} campaign={campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpRequest;

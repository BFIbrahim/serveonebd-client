import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddNewCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const [campaignData, setCampaignData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setCampaignData({ ...campaignData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosSecure.post("/campaigns", campaignData);
      Swal.fire({
        icon: "success",
        title: "Campaign Added!",
        text: "Your new campaign has been successfully added.",
        confirmButtonColor: "#2dc653",
      });
      setCampaignData({
        title: "",
        description: "",
        category: "",
        location: "",
        startDate: "",
        endDate: "",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Could not add the campaign.",
        confirmButtonColor: "#2dc653",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 md:p-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        
        <div className="md:w-1/2">
          <img
            src="https://i.ibb.co.com/GvkG54HJ/Chat-GPT-Image-Jan-10-2026-10-31-11-PM.png"
            alt="Campaign"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-bold text-secondary mb-6">Add New Campaign</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">Campaign Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={campaignData.title}
                onChange={handleChange}
                placeholder="Enter campaign title"
                className="input input-bordered w-full text-base-content border-secondary"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">Description</span>
              </label>
              <textarea
                name="description"
                value={campaignData.description}
                onChange={handleChange}
                placeholder="Enter campaign description (max 100 characters)"
                className="textarea textarea-bordered w-full text-base-content border-secondary"
                maxLength={100}
                rows={3}
                required
              ></textarea>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">Category</span>
              </label>
              <select
                name="category"
                value={campaignData.category}
                onChange={handleChange}
                className="select select-bordered w-full text-base-content border-secondary"
                required
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Medicine">Medicine</option>
                <option value="Clothing">Clothing</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">Location</span>
              </label>
              <input
                type="text"
                name="location"
                value={campaignData.location}
                onChange={handleChange}
                placeholder="Enter campaign location"
                className="input input-bordered w-full text-base-content border-secondary"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-medium text-secondary">Start Date</span>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={campaignData.startDate}
                  onChange={handleChange}
                  className="input input-bordered w-full text-base-content border-secondary"
                  required
                />
              </div>

              <div className="flex-1">
                <label className="label">
                  <span className="label-text font-medium text-secondary">End Date</span>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={campaignData.endDate}
                  onChange={handleChange}
                  className="input input-bordered w-full text-base-content border-secondary"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-white mt-4"
            >
              Add Campaign
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCampaign;

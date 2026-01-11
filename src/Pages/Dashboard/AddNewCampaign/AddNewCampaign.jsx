import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddNewCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const campaignData = {
      ...data,
      email: user?.email,
    };

    try {
      await axiosSecure.post("/campaigns", campaignData);

      Swal.fire({
        icon: "success",
        title: "Campaign Added!",
        text: "Your new campaign has been successfully added.",
        confirmButtonColor: "#2dc653",
      });

      reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Could not add the campaign.",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 md:p-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-5 overflow-hidden">

        <div className="hidden md:flex col-span-2 items-center justify-center p-6">
          <img
            src="https://i.ibb.co.com/GvkG54HJ/Chat-GPT-Image-Jan-10-2026-10-31-11-PM.png"
            alt="Campaign"
            className="w-full h-96 object-cover rounded-[50%_40%_60%_50%] shadow-2xl"
          />
        </div>

        <div className="col-span-3 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            Add New Campaign
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create a campaign to help people in need
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Campaign Title
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter campaign title"
                className="input input-bordered w-full border-secondary"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  Campaign title is required
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Enter campaign description (max 100 characters)"
                className="textarea textarea-bordered w-full border-secondary"
                rows={3}
                maxLength={100}
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  Description is required
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Category
                </span>
              </label>
              <select
                className="select select-bordered w-full border-secondary"
                {...register("category", { required: true })}
              >
                <option value="">Select Category</option>
                <option value="Food">Food</option>
                <option value="Medicine">Medicine</option>
                <option value="Clothing">Clothing</option>
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  Category is required
                </p>
              )}
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium text-secondary">
                  Location
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter campaign location"
                className="input input-bordered w-full border-secondary"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">
                  Location is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full text-white mt-6"
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

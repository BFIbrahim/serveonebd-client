import Swal from "sweetalert2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UrgentCampaign = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const { data: campaigns = [], isLoading } = useQuery({
    queryKey: ["urgentCampaigns"],
    queryFn: async () => {
      const res = await axiosSecure.get("/campaigns?status=urgent");
      return res.data;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      return axiosSecure.patch(`/campaigns/${id}/status`, { status });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["urgentCampaigns"]);
    },
  });

  const handleAction = async (campaign, status) => {
    const actionText = status === "approved" ? "Accept" : "Reject";

    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you want to ${actionText.toLowerCase()} this campaign?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: status === "approved" ? "#2dc653" : "#dc2626",
      cancelButtonColor: "#6c757d",
      confirmButtonText: `Yes, ${actionText}`,
    });

    if (result.isConfirmed) {
      await updateStatusMutation.mutateAsync({
        id: campaign._id,
        status,
      });

      Swal.fire({
        icon: "success",
        title: `${actionText}ed Successfully`,
        text: `Campaign "${campaign.title}" has been ${actionText.toLowerCase()}ed.`,
        confirmButtonColor: "#2dc653",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      <h2 className="text-2xl font-bold text-secondary mb-6">
        Urgent Campaigns
      </h2>

      <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-secondary text-white">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Created By</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={campaign._id} className="hover">
                <td>{index + 1}</td>
                <td className="font-semibold">{campaign.title}</td>
                <td>{campaign.category}</td>
                <td>{campaign.location}</td>
                <td>{campaign.createdBy}</td>
                <td>{campaign.status}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleAction(campaign, "approved")}
                    className="btn btn-sm bg-primary text-white hover:bg-primary/90"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleAction(campaign, "rejected")}
                    className="btn btn-sm btn-error text-white"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:hidden">
        {campaigns.map((campaign, index) => (
          <div
            key={campaign._id}
            className="card bg-white shadow-md border border-gray-100"
          >
            <div className="card-body p-4">
              <h3 className="font-bold text-lg text-secondary">
                {index + 1}. {campaign.title}
              </h3>

              <div className="text-sm space-y-1">
                <p>
                  <span className="font-semibold">Category:</span>{" "}
                  {campaign.category}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {campaign.location}
                </p>
                <p>
                  <span className="font-semibold">Created By:</span>{" "}
                  {campaign.createdBy}
                </p>
              </div>

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleAction(campaign, "approved")}
                  className="btn btn-sm bg-primary text-white flex-1"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleAction(campaign, "rejected")}
                  className="btn btn-sm btn-error text-white flex-1"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UrgentCampaign;

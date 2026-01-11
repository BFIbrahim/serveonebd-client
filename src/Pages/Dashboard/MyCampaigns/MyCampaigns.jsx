import Swal from "sweetalert2";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const MyCampaigns = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    const { data: campaigns = [], isLoading } = useQuery({
        queryKey: ["myCampaigns", user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/campaigns?createdBy=${user.email}`);
            return res.data;
        },
    });

    const updateCampaignMutation = useMutation({
        mutationFn: async ({ id, status }) => {
            return axiosSecure.patch(`/campaigns/${id}/status`, { status });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["myCampaigns", user.email]);
        },
    });

    const deleteCampaignMutation = useMutation({
        mutationFn: async (id) => {
            return axiosSecure.delete(`/campaigns/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["myCampaigns", user.email]);
        },
    });

    const handleAction = async (campaign, action) => {
        let actionText = "";
        let status = "";

        if (action === "completed") {
            actionText = "Mark as Completed";
            status = "completed";
        } else if (action === "urgent") {
            actionText = "Mark as Urgent";
            status = "urgent";
        } else if (action === "delete") {
            actionText = "Delete";
        }

        const result = await Swal.fire({
            title: "Are you sure?",
            text: `Do you want to ${actionText.toLowerCase()} this campaign?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: action === "delete" ? "#dc2626" : "#2dc653",
            cancelButtonColor: "#6c757d",
            confirmButtonText: `Yes, ${actionText}`,
        });

        if (result.isConfirmed) {
            if (action === "delete") {
                await deleteCampaignMutation.mutateAsync(campaign._id);
                Swal.fire({
                    icon: "success",
                    title: "Deleted Successfully",
                    text: `Campaign "${campaign.title}" has been deleted.`,
                    confirmButtonColor: "#2dc653",
                });
            } else {
                await updateCampaignMutation.mutateAsync({ id: campaign._id, status });
                Swal.fire({
                    icon: "success",
                    title: `${actionText} Successfully`,
                    text: `Campaign "${campaign.title}" has been ${actionText.toLowerCase()}.`,
                    confirmButtonColor: "#2dc653",
                });
            }
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
                My Campaigns
            </h2>

            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
                <table className="table w-full">
                    <thead className="bg-secondary text-white">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Location</th>
                            <th>Date</th>
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
                                <td>{new Date(campaign.createdAt).toLocaleDateString()}</td>
                                <td>{campaign.status}</td>
                                <td className="flex gap-2">
                                    <button
                                        onClick={() => handleAction(campaign, "completed")}
                                        className="btn btn-sm bg-primary text-white hover:bg-primary/90"
                                    >
                                        Mark as Completed
                                    </button>
                                    <button
                                        onClick={() => handleAction(campaign, "urgent")}
                                        className="btn btn-sm btn-warning text-white"
                                    >
                                        Mark Urgent
                                    </button>
                                    <button
                                        onClick={() => handleAction(campaign, "delete")}
                                        className="btn btn-sm btn-error text-white"
                                    >
                                        Delete
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
                                    <span className="font-semibold">Category:</span> {campaign.category}
                                </p>
                                <p>
                                    <span className="font-semibold">Location:</span> {campaign.location}
                                </p>
                                <p>
                                    <span className="font-semibold">Date:</span> {new Date(campaign.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={() => handleAction(campaign, "completed")}
                                    className="btn btn-sm bg-primary text-white flex-1"
                                >
                                    Mark as Completed
                                </button>
                                <button
                                    onClick={() => handleAction(campaign, "urgent")}
                                    className="btn btn-sm btn-warning text-white flex-1"
                                >
                                    Mark Urgent
                                </button>
                                <button
                                    onClick={() => handleAction(campaign, "delete")}
                                    className="btn btn-sm btn-error text-white flex-1"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCampaigns;

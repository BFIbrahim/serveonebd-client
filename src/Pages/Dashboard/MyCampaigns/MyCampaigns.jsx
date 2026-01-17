import Swal from "sweetalert2";
import { useQuery, useQueryClient } from "@tanstack/react-query";
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

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
            try {
                const res = await axiosSecure.delete(`/campaigns/${id}`);
                if (res.data) {
                    queryClient.invalidateQueries(["myCampaigns", user.email]);
                    Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
                }
            } catch (err) {
                Swal.fire("Error", "Failed to delete campaign", "error");
                console.log(err)
            }
        }
    };

    const handleUpdateStatus = async (id, newStatus) => {
        const result = await Swal.fire({
            title: `Mark as ${newStatus}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2dc653",
            confirmButtonText: "Yes, update it!",
        });

        if (result.isConfirmed) {
            try {
                const res = await axiosSecure.patch(`/campaigns/${id}/status`, { status: newStatus });
                if (res.data) {
                    queryClient.invalidateQueries(["myCampaigns", user.email]);
                    Swal.fire("Updated!", `Campaign is now ${newStatus}.`, "success");
                }
            } catch (err) {
                Swal.fire("Error", "Failed to update status", "error");
                console.log(err)
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
            <h2 className="text-2xl font-bold text-secondary mb-6">My Campaigns</h2>

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
                                <td>
                                    <span className={`badge ${campaign.status === 'urgent' ? 'badge-warning' : 'badge-ghost'}`}>
                                        {campaign.status}
                                    </span>
                                </td>
                                <td className="flex gap-2">
                                    {
                                        campaign.status === 'completed' ? <button
                                        onClick={() => handleUpdateStatus(campaign._id, "completed")}
                                        className="btn btn-disabled btn-sm bg-gray-200 text-gray-300 hover:bg-primary/90"
                                    >
                                        Completed
                                    </button> : <button
                                        onClick={() => handleUpdateStatus(campaign._id, "completed")}
                                        className="btn btn-sm bg-primary text-white hover:bg-primary/90"
                                    >
                                        Mark Completed
                                    </button>
                                    }

                                    {
                                        campaign.status === 'completed' || campaign.status === 'approved' || campaign.status === 'urgent'  ? <button
                                        onClick={() => handleUpdateStatus(campaign._id, "urgent")}
                                        className="btn btn-disabled btn-sm bg-gray-200 text-gray-300"
                                    >
                                        Marked Urgent
                                    </button> : <button
                                        onClick={() => handleUpdateStatus(campaign._id, "urgent")}
                                        className="btn btn-sm btn-warning text-white"
                                    >
                                        Mark Urgent
                                    </button>
                                    }
                                    <button
                                        onClick={() => handleDelete(campaign._id)}
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
                    <div key={campaign._id} className="card bg-white shadow-md border border-gray-100">
                        <div className="card-body p-4">
                            <h3 className="font-bold text-lg text-secondary">
                                {index + 1}. {campaign.title}
                            </h3>
                            <div className="text-sm space-y-1">
                                <p><span className="font-semibold">Category:</span> {campaign.category}</p>
                                <p><span className="font-semibold">Status:</span> {campaign.status}</p>
                                <p><span className="font-semibold">Date:</span> {new Date(campaign.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {
                                    campaign.status === "completed" ? <button
                                    onClick={() => handleUpdateStatus(campaign._id, "completed")}
                                    className="btn btn-disabled btn-xs bg-gray-200 text-gray-300 text-white flex-1"
                                >
                                    Completed
                                </button> : <button
                                    onClick={() => handleUpdateStatus(campaign._id, "completed")}
                                    className="btn btn-xs bg-primary text-white flex-1"
                                >
                                    Completed
                                </button>
                                }
                                {
                                    campaign.status === 'approved' || campaign.status === 'urgent' || campaign.status === 'completed' ? <button
                                    onClick={() => handleUpdateStatus(campaign._id, "urgent")}
                                    className="btn btn-disabled btn-xs btn-warning text-white flex-1"
                                >
                                    Urgent
                                </button> : <button
                                    onClick={() => handleUpdateStatus(campaign._id, "urgent")}
                                    className="btn btn-xs btn-warning text-white flex-1"
                                >
                                    Urgent
                                </button>
                                }
                                <button
                                    onClick={() => handleDelete(campaign._id)}
                                    className="btn btn-xs btn-error text-white flex-1"
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
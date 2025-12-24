const liveCampaignsData = [
  {
    id: 1,
    image: "https://www.oncologynurseadvisor.com/wp-content/uploads/sites/13/2024/05/elderly-female-patient-nurses-family_G_1392605531.jpg",
    category: "Medical",
    title: "Support Cancer Patients",
    progress: 70,
    daysLeft: 12,
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/b/help-feeding-homeless-people-to-alleviate-hunger-poverty-concept-help-feeding-homeless-people-to-alleviate-hunger-400423497.jpg",
    category: "Food",
    title: "Feed the Homeless",
    progress: 45,
    daysLeft: 8,
  },
  {
    id: 3,
    image: "https://www.globalgiving.org/pfil/12341/ph_12341_43691.jpg",
    title: "Winter Clothes for Kids",
    category: "Clothing",
    progress: 60,
    daysLeft: 15,
  },
];

const LiveCampaigns = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Ongoing Campaigns
        </h2>
        <p className="text-accent text-center md:w-[70%] mx-auto mb-12 mt-3">Join our active campaigns and make a real impact by supporting people in need. Every contribution counts toward creating a better community.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {liveCampaignsData.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-48 object-cover rounded-t-[12px]"
              />

              <div className="p-6 flex flex-col flex-1 justify-between">
                <span className="badge badge-primary mb-2 text-sm text-white">{campaign.category}</span>

                <h3 className="text-lg font-bold mb-4">{campaign.title}</h3>

                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="btn btn-primary btn-sm px-4 py-2 text-white" >
                    Donate Now
                  </button>
                  <span className="text-gray-500 text-sm">{campaign.daysLeft} Days Left</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCampaigns;

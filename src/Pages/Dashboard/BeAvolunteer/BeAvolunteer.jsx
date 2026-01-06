import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const BeAvolunteer = () => {
  const { user } = useAuth();
  console.log(user)

  const [formData, setFormData] = useState({
    phone: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const volunteerInfo = {
      name: user?.displayName,
      email: user?.email,
      phone: formData.phone,
      location: formData.location,
    };

    console.log(volunteerInfo);
    
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center md:p-10">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-secondary mb-2">
            Be a Volunteer
          </h2>
          <p className="text-accent mb-8">
            Join ServeOne and help people in need
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                value={user?.displayName || ''}
                disabled
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Phone Number</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="01XXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-medium">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="City / Area"
                value={formData.location}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary text-white w-full mt-4"
            >
              Become a Volunteer
            </button>
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center bg-secondary/5 p-8">
          <img
            src="https://static.vecteezy.com/system/resources/previews/037/897/126/non_2x/group-of-young-people-holding-poster-and-taking-pictures-happy-volunteers-working-together-vector.jpg"
            alt="Volunteer"
            className="max-h-[420px] object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default BeAvolunteer;

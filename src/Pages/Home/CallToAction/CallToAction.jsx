import React from "react";
import { Link } from "react-router";

const CallToAction = () => {

  return (
    <section className="w-full bg-gradient-to-r from-[#041c38] to-[#02233f] py-[100px] px-6 md:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex-1 flex justify-center md:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="https://img.freepik.com/premium-photo/smiling-volunteers-cleaning-park_53876-1069102.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Volunteers"
              className="w-full h-full object-cover rounded-[50%_40%_60%_50%] shadow-xl"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to make a difference?
          </h2>

          <p className="text-white">Join our community of passionate volunteers and partners to create real impact. Together, we can bring hope, support, and change to those who need it most.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/dashboard/be-volunteer" className="btn bg-primary text-white px-6 py-3 rounded-lg border-none hover:scale-105 transition-transform">
              Join as Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import { FaLayerGroup, FaFileAlt, FaHandsHelping, FaSmile } from 'react-icons/fa';
import { IoChevronForwardOutline, IoChevronDownOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      title: "Choose what you need",
      icon: <FaLayerGroup className="text-3xl" />,
      description: "Select from Medicine, Food, or Clothing categories."
    },
    {
      id: 2,
      title: "Submit a request",
      icon: <FaFileAlt className="text-3xl" />,
      description: "Fill out the form with your location and urgency."
    },
    {
      id: 3,
      title: "Get matched",
      icon: <FaHandsHelping className="text-3xl" />,
      description: "A helper nearby will accept your request."
    },
    {
      id: 4,
      title: "Receive support",
      icon: <FaSmile className="text-3xl" />,
      description: "The items will be delivered to your location."
    }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-accent mt-6 text-lg">Four simple steps to get the help you need</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center text-center w-full lg:w-64">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2 uppercase tracking-tight">
                  Step {step.id}
                </h3>
                <p className="text-accent text-sm leading-relaxed px-4">
                  {step.title}
                </p>
              </div>

              {index !== steps.length - 1 && (
                <>
                  <div className="hidden lg:block text-primary/30 text-3xl">
                    <IoChevronForwardOutline />
                  </div>
                  <div className="lg:hidden text-primary/30 text-3xl py-2">
                    <IoChevronDownOutline />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/get-help" className="btn btn-primary btn-lg text-white px-12 rounded-full shadow-lg hover:scale-105 transition-transform">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
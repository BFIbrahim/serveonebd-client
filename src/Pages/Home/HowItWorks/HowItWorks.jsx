import Aos from "aos";
import { useEffect } from "react";
import { FaFileAlt, FaSearch, FaHandshake, FaArrowRight } from "react-icons/fa";

const howItWorksSteps = [
  {
    id: 1,
    icon: <FaFileAlt size={32} className="text-primary" />,
    title: "Request Support",
    description: "Submit your need or support request. Fill out basic details to get started.",
  },
  {
    id: 2,
    icon: <FaSearch size={32} className="text-secondary" />,
    title: "Find Helpers",
    description: "Our platform matches your request with volunteers ready to help you.",
  },
  {
    id: 3,
    icon: <FaHandshake size={32} className="text-primary" />,
    title: "Receive Aid",
    description: "Get the support you need from verified donors and volunteers efficiently.",
  },
];

const HowItWorks = () => {

          useEffect(() => {
            Aos.init({
              duration: 700, 
              easing: "ease-in-out",
              once: false, 
            });
          }, []);

  return (
    <section  className="py-20 bg-[#f9f9f9] relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          How It Works
        </h2>

        <div data-aos="fade-right" className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center text-center md:w-1/4 px-4 relative">
              <div className="bg-white border-2 border-gray-300 rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-sm">
                {step.icon}
              </div>

              <h3 className="font-bold text-lg mb-2">{step.title}</h3>

              <p className="text-gray-600 text-sm">{step.description}</p>

              {index < howItWorksSteps.length - 1 && (
                <div className="hidden md:flex absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-gray-400">
                  <FaArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
import React from "react";
import { FaHandsHelping, FaPills, FaUtensils, FaTshirt } from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaHandsHelping className="text-4xl text-green-500 mb-2" />,
    number: "1,250+",
    label: "Total people helped",
  },
  {
    id: 2,
    icon: <FaPills className="text-4xl text-blue-500 mb-2" />,
    number: "3,400+",
    label: "Medicine requests fulfilled",
  },
  {
    id: 3,
    icon: <FaUtensils className="text-4xl text-yellow-500 mb-2" />,
    number: "12,500+",
    label: "Meals delivered",
  },
  {
    id: 4,
    icon: <FaTshirt className="text-4xl text-red-500 mb-2" />,
    number: "5,200+",
    label: "Clothing provided",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 text-transparent bg-clip-text  rounded-base px-4 py-2.5 text-center leading-5 ">
          Our Platform Impact
        </h2>
        <p className="text-gray-600">
          See how SRVEONEBD is helping people across Bangladesh
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 text-center">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            {stat.icon}
            <h3 className="text-2xl font-bold mb-1">{stat.number}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;

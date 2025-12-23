import React from "react";
import { FaPills, FaUtensils, FaTshirt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaPills className="text-4xl text-green-500 mb-4" />,
    title: "Medicine Support",
    description: "Help with essential medicines",
  },
  {
    id: 2,
    icon: <FaUtensils className="text-4xl text-yellow-500 mb-4" />,
    title: "Food Support",
    description: "Get meals when you need them",
  },
  {
    id: 3,
    icon: <FaTshirt className="text-4xl text-blue-500 mb-4" />,
    title: "Clothing Support",
    description: "Support for basic clothing needs",
  },
];

const ServiceCard = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

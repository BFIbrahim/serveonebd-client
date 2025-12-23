import React from "react";
import { useNavigate } from "react-router";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative py-20 px-6 md:px-20 rounded-xl mx-6 md:mx-20 my-12 bg-gray-50"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/27TqmGhv/Chat-GPT-Image-Dec-23-2025-10-26-20-PM.png')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

      <div className="relative max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
          Be Part of the Change
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Connect with people who need help or help others with medicines, food, and clothing.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button
            onClick={() => navigate("/get-help")}
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:from-blue-600 hover:to-green-400 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm md:text-base px-6 py-3 transition-all"
          >
            I Need Help
          </button>

          <button
            onClick={() => navigate("/help-others")}
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm md:text-base px-6 py-3   transition-all"
          >
            I Want to Help
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

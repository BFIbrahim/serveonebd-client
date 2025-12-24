import React from "react";

const TrustFooter = () => {
  const logos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBdvDnQ5mPp_uXg14LW9MigSEC2ZjIIIemKA&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Payoneer_logo.svg/1200px-Payoneer_logo.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/2560px-Mastercard-logo.svg.png",
  ];

  return (
    <section className="bg-gray-50 py-6">
      {/* Top Divider */}
      <hr className="border-gray-300 mb-4" />

      {/* Caption */}
      <p className="text-center text-gray-500 text-sm font-semibold tracking-widest mb-4">
        SECURE & TRANSPARENT CONTRIBUTIONS
      </p>

      {/* Logos */}
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="partner logo"
            className="h-8 grayscale opacity-70 hover:opacity-100 transition-opacity"
          />
        ))}
      </div>

      {/* Bottom Divider */}
      <hr className="border-gray-300 mt-4" />
    </section>
  );
};

export default TrustFooter;

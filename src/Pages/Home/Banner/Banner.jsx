import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router";

const slides = [
  "https://i.ibb.co.com/b5YC1v59/Chat-GPT-Image-Dec-23-2025-10-08-50-PM.png",
  "https://i.ibb.co.com/ds4X3pJD/Gemini-Generated-Image-rnmwsirnmwsirnmw.png",
  "hhttps://i.ibb.co.com/RGVjm3wS/Gemini-Generated-Image-62q32262q32262q3.png",
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative h-[90vh] w-full">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Black + Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 text-white">
        
        {/* Gradient Text Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl 
          bg-gradient-to-br from-green-400 to-blue-600 
          hover:from-blue-600 hover:to-green-400 
          text-transparent bg-clip-text">
          Connecting People Who Need Help With People Who Want to Help
        </h1>

        <p className="text-lg md:text-2xl mb-10 text-gray-200">
          Medicine • Food • Clothing support in one platform
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          
          {/* Green Button */}
          <button
            onClick={() => navigate("/get-help")}
            className="btn border-none text-white bg-gradient-to-br from-green-400 to-blue-600 
            hover:bg-gradient-to-bl focus:ring-4 focus:outline-none 
            focus:ring-green-200 dark:focus:ring-green-800 
            font-medium rounded-base text-sm px-6 py-3 text-center leading-5"
          >
             I Need Help
          </button>

          {/* Red Button */}
          <button
            onClick={() => navigate("/help-others")}
            className="btn border-none text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 
            hover:bg-gradient-to-br focus:ring-4 focus:outline-none 
            focus:ring-red-300 dark:focus:ring-red-800 
            shadow-lg shadow-red-500/50 
            font-medium rounded-base text-sm px-6 py-3 text-center leading-5"
          >
             I Want to Help
          </button>

        </div>
      </div>
    </section>
  );
};

export default Banner;

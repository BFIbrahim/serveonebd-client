import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // Correct import
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    image: "https://i.ibb.co/zZwvK0s/boy1.png",
    text: "SRVEONEBD helped me get urgent medicines for my family. Truly life-saving!",
  },
  {
    id: 2,
    name: "Fatima Begum",
    image: "https://i.ibb.co/rfLMdYt/girl2.jpg",
    text: "Thanks to this platform, I could provide meals to those in need in my area.",
  },
  {
    id: 3,
    name: "Shahin Alam",
    image: "https://i.ibb.co/rHbH42m/boy2.jpg",
    text: "Amazing service! Clothing support was delivered on time and with care.",
  },
  {
    id: 4,
    name: "Nadia Akter",
    image: "https://i.ibb.co/BcMjdRr/girl1.jpg",
    text: "I donated food through SRVEONEBD and felt so happy helping others.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          What People Are Saying
        </h2>
        <p className="text-gray-600">
          Real stories from people who received help through SRVEONEBD
        </p>
      </div>

      <Swiper
        
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id} className="px-2">
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg flex flex-col items-center text-center max-w-xl mx-auto my-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="font-bold text-lg mb-2">{testimonial.name}</h3>
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;

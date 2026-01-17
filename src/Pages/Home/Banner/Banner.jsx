import { useNavigate } from "react-router";
import Typewriter from 'typewriter-effect';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-100">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between py-16 px-6 md:px-12 gap-10">

        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            <Typewriter
              options={{
                strings: ['<span class="text-primary">Help</span> & <span class="text-secondary">Support</span>',
                  '<span class="text-primary">Kindness</span> in <span class="text-secondary">Action</span>',
                  '<span class="text-primary">Every</span> Help <span class="text-secondary">Matters</span>'

                ],
                autoStart: true,
                loop: true,
              }}
            />

          </h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-lg">
            Connect with people and provide essential support like medicine, food, and clothing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/help-others")}
              className="btn btn-primary text-white px-8 py-3 rounded-lg"
            >
              I Want Help
            </button>

            <button
              onClick={() => navigate("/get-help")}
              className="btn btn-secondary text-white px-8 py-3 rounded-lg"
            >
              I Need Help
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex flex-col items-start border-r-2 border-gray-400 pr-4">
              <span className="text-primary font-bold text-xl">3k+</span>
              <span className="text-gray-600">People Helped</span>
            </div>
            <div className="flex flex-col items-start border-r-2 border-gray-400 pr-4">
              <span className="text-primary font-bold text-xl">500+</span>
              <span className="text-gray-600">Volunteers</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-primary font-bold text-xl">100+</span>
              <span className="text-gray-600">Projects Completed</span>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://i.ibb.co.com/b5YC1v59/Chat-GPT-Image-Dec-23-2025-10-08-50-PM.png"
            alt="Helping Hands"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

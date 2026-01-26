import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white text-base-content">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-primary">Us</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Whether you need help, want to offer help, or have a question —
          we’re always here to listen.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="
            card bg-base-100 border shadow-sm group
            transition-all duration-300 ease-out
            hover:bg-primary hover:text-white
            hover:shadow-2xl hover:-translate-y-2
          ">
            <div className="card-body items-center text-center">
              <FaEnvelope
                className="text-primary group-hover:text-white transition"
                size={34}
              />
              <h3 className="card-title mt-3">Email Us</h3>
              <p className="text-sm opacity-80">
                Reach out anytime via email
              </p>
              <p className="font-medium mt-2">
                support@serveone.com
              </p>
            </div>
          </div>

          <div className="
            card bg-base-100 border shadow-sm group
            transition-all duration-300 ease-out
            hover:bg-primary hover:text-white
            hover:shadow-2xl hover:-translate-y-2
          ">
            <div className="card-body items-center text-center">
              <FaPhoneAlt
                className="text-primary group-hover:text-white transition"
                size={34}
              />
              <h3 className="card-title mt-3">Call Us</h3>
              <p className="text-sm opacity-80">
                Available during working hours
              </p>
              <p className="font-medium mt-2">
                +880 1XXX-XXXXXX
              </p>
            </div>
          </div>

          <div className="
            card bg-base-100 border shadow-sm group
            transition-all duration-300 ease-out
            hover:bg-primary hover:text-white
            hover:shadow-2xl hover:-translate-y-2
          ">
            <div className="card-body items-center text-center">
              <FaMapMarkerAlt
                className="text-primary group-hover:text-white transition"
                size={34}
              />
              <h3 className="card-title mt-3">Our Location</h3>
              <p className="text-sm opacity-80">
                Serving people across
              </p>
              <p className="font-medium mt-2">
                Bangladesh
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="text-center pb-16 px-6">
        <p className="text-gray-600">
          ServeOne is built on trust, kindness, and community.
          If you need us — we are just a message away.
        </p>
      </section>
    </div>
  );
};

export default Contact;

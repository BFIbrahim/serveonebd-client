import { FaHandsHelping, FaUsers, FaHeart, FaGlobe } from "react-icons/fa";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white text-base-content">
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
          About <span className="text-secondary">ServeOne<spa className="text-primary">BD</spa></span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          ServeOne is a people-powered platform built to connect those who need
          help with those who are willing to offer it. We believe that kindness,
          when organized, can change lives.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Our <span className="text-primary">Mission</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is simple — remove the distance between help and hope.
            Whether someone needs support or wants to support others, ServeOne
            makes meaningful connections possible.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We aim to build a trusted ecosystem where compassion meets action,
            powered by real people and real needs.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="stats shadow-md bg-base-100">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FaUsers size={28} />
              </div>
              <div className="stat-title">Community Driven</div>
              <div className="stat-value text-primary">100%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            What We <span className="text-primary">Stand For</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
              <div className="card-body items-center text-center">
                <FaHandsHelping className="text-primary" size={36} />
                <h3 className="card-title mt-3">Helping Hands</h3>
                <p className="text-gray-600 text-sm">
                  Connecting genuine helpers with real needs.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
              <div className="card-body items-center text-center">
                <FaHeart className="text-primary" size={36} />
                <h3 className="card-title mt-3">Empathy First</h3>
                <p className="text-gray-600 text-sm">
                  Built with compassion at its core.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
              <div className="card-body items-center text-center">
                <FaUsers className="text-primary" size={36} />
                <h3 className="card-title mt-3">Community Trust</h3>
                <p className="text-gray-600 text-sm">
                  Transparency and respect for everyone.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm hover:shadow-md transition">
              <div className="card-body items-center text-center">
                <FaGlobe className="text-primary" size={36} />
                <h3 className="card-title mt-3">Social Impact</h3>
                <p className="text-gray-600 text-sm">
                  Small actions creating big change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Together, We Can <span className="text-primary">Serve One</span>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-6">
          ServeOne is more than a platform — it’s a movement. A movement where
          helping one person can inspire many more.
        </p>
        <Link to="/dashboard/be-volunteer"><button className="btn btn-primary px-8 text-white">
          Be a volunteer
        </button></Link>
      </section>
    </div>
  );
};

export default About;

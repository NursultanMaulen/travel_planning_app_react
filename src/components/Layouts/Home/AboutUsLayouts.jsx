import { Link } from "react-router-dom";
import { urlStaticAboutImage } from "../../../utils/data";

const AboutUsLayouts = () => {
  return (
    <section
      id="#about"
      className="transition-allabout section duration-400 dark:bg-gray-900"
    >
      <div className="container grid gap-12 about__container xs:max-w-sm sm:max-w-md md:max-w-lg xl:max-w-4xl xl:grid-cols-2 xl:items-center 2xl:max-w-5xl">
        <div className="about__data">
          <p className="about__subtitle section-subtitle">About Us</p>
          <h1 className="about__title section-title">Explore world with us</h1>
          <p className="mb-4 about__text section-text 2xl:max-w-md">
            At Travel Planning, we are transforming the way people organize
            their trips by harnessing the power of data-driven insights and
            artificial intelligence. Our platform integrates flights,
            accommodations, attractions, and budgeting tools into a single,
            user-friendly interface. We understand that the multitude of
            websites and options available can make travel planning
            overwhelming. That's why our AI-enhanced solution quickly and
            effortlessly guides travelers toward optimal choices by tailoring
            recommendations and simplifying itineraries. Our mission is to
            streamline the travel planning process, making it faster, easier,
            and less stressful for everyone—be it families on vacation, business
            professionals, or solo adventurers. Join us as we revolutionize
            global travel, one seamless experience at a time.
          </p>
          <Link to="/" className="inline-flex about__button button">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        <img
          src={urlStaticAboutImage}
          alt="about img"
          className="object-cover w-full about__img"
        />
      </div>
    </section>
  );
};

export default AboutUsLayouts;

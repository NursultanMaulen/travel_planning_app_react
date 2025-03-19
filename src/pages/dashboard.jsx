import React from "react";
import Navbar from "../components/Fragments/Home/Navbar";
import FooterLayouts from "../components/Layouts/Home/FooterLayouts";
import TravelCarousel from "../components/Fragments/Dashboard/TravelCarousel";
import AIChat from "../components/Elements/AIChat/AIChat";

const DashboardPage = () => {
  const recommendedCountries = [
    {
      id: 1,
      title: "France",
      image: "/api/placeholder/400/320",
      description:
        "France is one of the most visited countries in the world, known for its exquisite cuisine, high fashion, medieval towns, and world-class cultural attractions, including the Eiffel Tower and the Louvre in Paris.",
    },
    {
      id: 2,
      title: "Italy",
      image: "/api/placeholder/400/320",
      description:
        "Italy is famous for its outstanding history, architecture, and cuisine. Here you can visit the ancient Colosseum in Rome, admire the architecture of Florence, take a gondola ride through the canals of Venice, or explore the colorful Amalfi Coast.",
    },
    {
      id: 3,
      title: "Japan",
      image: "/api/placeholder/400/320",
      description:
        "Japan is an amazing country of contrasts where ancient traditions harmoniously blend with cutting-edge technology. Visit Tokyo's skyscrapers, Kyoto's ancient temples, and enjoy famous Japanese cuisine.",
    },
    {
      id: 4,
      title: "Greece",
      image: "/api/placeholder/400/320",
      description:
        "Greece offers stunning landscapes, from beautiful islands with white houses and blue roofs to ancient ruins and historic sites. Explore the Acropolis of Athens, swim in crystal clear waters, and enjoy delicious Mediterranean cuisine.",
    },
    {
      id: 5,
      title: "Thailand",
      image: "/api/placeholder/400/320",
      description:
        "Thailand is known for its tropical beaches, luxurious royal palaces, ancient ruins, and ornate temples with majestic Buddha statues. An excellent choice for exotic lovers and adventure seekers.",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Concert in Paris",
      image: "/api/placeholder/400/320",
      date: "2024-10-15",
      description:
        "The grand musical event of the year in the capital of France. You will experience an unforgettable show featuring world stars, stunning light effects, and a festive atmosphere.",
    },
    {
      id: 2,
      title: "Venice Carnival",
      image: "/api/placeholder/400/320",
      date: "2025-02-10",
      description:
        "The famous Venetian carnival is one of the brightest and most memorable events in Italy. Masks, costumes, music, and the unique atmosphere of a medieval festival.",
    },
    {
      id: 3,
      title: "Amsterdam Light Festival",
      image: "/api/placeholder/400/320",
      date: "2024-12-05",
      description:
        "An annual festival during which the city turns into a real light gallery. Artists from around the world create unique light installations on the canals and streets of the city.",
    },
    {
      id: 4,
      title: "Oktoberfest in Munich",
      image: "/api/placeholder/400/320",
      date: "2025-09-20",
      description:
        "The world's largest beer festival, which annually attracts millions of visitors. You'll enjoy liters of fresh beer, traditional German dishes, and a cheerful atmosphere.",
    },
    {
      id: 5,
      title: "Cherry Blossom in Japan",
      image: "/api/placeholder/400/320",
      date: "2025-04-01",
      description:
        "Cherry blossom is one of the most beautiful natural phenomena that attracts tourists from all over the world. Pink clouds of flowering trees create a unique atmosphere of spring renewal.",
    },
  ];

  const popularHotels = [
    {
      id: 1,
      title: "Grand Plaza Hotel",
      image: "/api/placeholder/400/320",
      location: "Barcelona, Spain",
      description:
        "A luxurious five-star hotel with panoramic city views, a rooftop pool, and a spa center. The perfect place for those who appreciate comfort and exquisite service.",
    },
    {
      id: 2,
      title: "Ocean Breeze Resort",
      image: "/api/placeholder/400/320",
      location: "Bali, Indonesia",
      description:
        "A cozy resort complex on the ocean shore with a private beach, traditional bungalows, and fine dining restaurants. Suitable for romantic getaways and family vacations.",
    },
    {
      id: 3,
      title: "Alpine Chalet Residence",
      image: "/api/placeholder/400/320",
      location: "Zermatt, Switzerland",
      description:
        "A comfortable mountain hotel with direct access to ski trails, a spa center, and traditional Swiss cuisine. Here you can enjoy the beauty of the Alps any time of the year.",
    },
    {
      id: 4,
      title: "Sandals Royal Caribbean",
      image: "/api/placeholder/400/320",
      location: "Jamaica",
      description:
        "An exclusive adults-only resort with all-inclusive system, private overwater bungalows, and high-class service. The ideal choice for an unforgettable vacation in the Caribbean.",
    },
    {
      id: 5,
      title: "Burj Al Arab Jumeirah",
      image: "/api/placeholder/400/320",
      location: "Dubai, UAE",
      description:
        "One of the most luxurious hotels in the world, located in a sail-shaped building. It offers service at the highest level, Michelin-starred restaurants, and stunning views of the Persian Gulf.",
    },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <Navbar />
        <AIChat />
      </div>

      <div className="pt-20">
        {" "}
        <main className="container mx-auto px-4">
          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Recommended Countries
            </h2>
            <TravelCarousel
              items={recommendedCountries}
              title="Popular Destinations"
            />
          </section>

          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Upcoming Events
            </h2>
            <TravelCarousel items={upcomingEvents} title="Don't Miss" />
          </section>

          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Popular Hotels
            </h2>
            <TravelCarousel items={popularHotels} title="Best Places to Stay" />
          </section>
        </main>
      </div>

      <FooterLayouts />
    </div>
  );
};

export default DashboardPage;

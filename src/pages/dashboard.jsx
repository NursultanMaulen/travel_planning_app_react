// src/pages/DashboardPage.jsx
import React from 'react';
import Navbar from '../components/Fragments/Home/Navbar';
import FooterLayouts from '../components/Layouts/Home/FooterLayouts';
import TravelCarousel from '../components/Fragments/Dashboard/TravelCarousel'; // Новый компонент

const DashboardPage = () => {
  const recommendedCountries = [
    { id: 1, title: 'Франция', image: 'url_to_image', description: 'Описание' },
    { id: 2, title: 'Италия', image: 'url_to_image', description: 'Описание' },
    // Добавьте больше данных
  ];

  const upcomingEvents = [
    { id: 1, title: 'Концерт в Париже', image: 'url_to_image', date: '2024-10-15' },
    // Добавьте больше данных
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      {/* Секция "Рекомендуемые страны" */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Рекомендуемые страны</h2>
        <TravelCarousel items={recommendedCountries} />
      </section>

      {/* Секция "Ближайшие события" */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-white mb-6">Ближайшие события</h2>
        <TravelCarousel items={upcomingEvents} />
      </section>

      <FooterLayouts />
    </div>
  );
};

export default DashboardPage;
import React from "react";
import Navbar from "../components/Fragments/Home/Navbar";
import FooterLayouts from "../components/Layouts/Home/FooterLayouts";
import TravelCarousel from "../components/Fragments/Dashboard/TravelCarousel";

const DashboardPage = () => {
  const recommendedCountries = [
    {
      id: 1,
      title: "Франция",
      image: "/api/placeholder/400/320",
      description:
        "Франция – одна из самых посещаемых стран мира, известная своей изысканной кухней, высокой модой, средневековыми городами и культурными достопримечательностями мирового класса, включая Эйфелеву башню и Лувр в Париже.",
    },
    {
      id: 2,
      title: "Италия",
      image: "/api/placeholder/400/320",
      description:
        "Италия славится своей выдающейся историей, архитектурой и кухней. Здесь вы сможете посетить древний Колизей в Риме, полюбоваться архитектурой Флоренции, прокатиться на гондоле по каналам Венеции или исследовать красочное побережье Амальфи.",
    },
    {
      id: 3,
      title: "Япония",
      image: "/api/placeholder/400/320",
      description:
        "Япония – удивительная страна контрастов, где древние традиции гармонично сочетаются с передовыми технологиями. Посетите токийские небоскребы, древние храмы Киото, и насладитесь знаменитой японской кухней.",
    },
    {
      id: 4,
      title: "Греция",
      image: "/api/placeholder/400/320",
      description:
        "Греция предлагает потрясающие пейзажи, от красивых островов с белыми домиками и голубыми крышами до древних руин и исторических мест. Исследуйте Афинский акрополь, плавайте в кристально чистых водах и наслаждайтесь вкусной средиземноморской кухней.",
    },
    {
      id: 5,
      title: "Таиланд",
      image: "/api/placeholder/400/320",
      description:
        "Таиланд известен своими тропическими пляжами, роскошными королевскими дворцами, древними руинами и украшенными орнаментом храмами с величественными статуями Будды. Отличный выбор для любителей экзотики и приключений.",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Концерт в Париже",
      image: "/api/placeholder/400/320",
      date: "2024-10-15",
      description:
        "Грандиозное музыкальное событие года в столице Франции. Вас ждет незабываемое шоу с участием мировых звезд, потрясающие световые эффекты и атмосфера праздника.",
    },
    {
      id: 2,
      title: "Карнавал в Венеции",
      image: "/api/placeholder/400/320",
      date: "2025-02-10",
      description:
        "Знаменитый венецианский карнавал - одно из самых ярких и запоминающихся событий Италии. Маски, костюмы, музыка и уникальная атмосфера средневекового праздника.",
    },
    {
      id: 3,
      title: "Фестиваль света в Амстердаме",
      image: "/api/placeholder/400/320",
      date: "2024-12-05",
      description:
        "Ежегодный фестиваль, во время которого город превращается в настоящую световую галерею. Художники со всего мира создают уникальные световые инсталляции на каналах и улицах города.",
    },
    {
      id: 4,
      title: "Октоберфест в Мюнхене",
      image: "/api/placeholder/400/320",
      date: "2025-09-20",
      description:
        "Крупнейший в мире фестиваль пива, который ежегодно привлекает миллионы посетителей. Вас ждут литры свежего пива, традиционные немецкие блюда и веселая атмосфера.",
    },
    {
      id: 5,
      title: "Сакура в Японии",
      image: "/api/placeholder/400/320",
      date: "2025-04-01",
      description:
        "Цветение сакуры - одно из самых красивых природных явлений, которое привлекает туристов со всего мира. Розовые облака цветущих деревьев создают неповторимую атмосферу весеннего обновления.",
    },
  ];

  const popularHotels = [
    {
      id: 1,
      title: "Grand Plaza Hotel",
      image: "/api/placeholder/400/320",
      location: "Барселона, Испания",
      description:
        "Роскошный пятизвездочный отель с панорамным видом на город, бассейном на крыше и спа-центром. Идеальное место для ценителей комфорта и изысканного сервиса.",
    },
    {
      id: 2,
      title: "Ocean Breeze Resort",
      image: "/api/placeholder/400/320",
      location: "Бали, Индонезия",
      description:
        "Уютный курортный комплекс на берегу океана с частным пляжем, традиционными бунгало и ресторанами высокой кухни. Подходит для романтического отдыха и семейных каникул.",
    },
    {
      id: 3,
      title: "Alpine Chalet Residence",
      image: "/api/placeholder/400/320",
      location: "Церматт, Швейцария",
      description:
        "Комфортабельный горный отель с прямым доступом к лыжным трассам, спа-центром и традиционной швейцарской кухней. Здесь вы сможете насладиться красотой Альп в любое время года.",
    },
    {
      id: 4,
      title: "Sandals Royal Caribbean",
      image: "/api/placeholder/400/320",
      location: "Ямайка",
      description:
        "Эксклюзивный курорт для взрослых с системой 'все включено', частными бунгало над водой и высококлассным сервисом. Идеальный выбор для незабываемого отдыха на Карибах.",
    },
    {
      id: 5,
      title: "Burj Al Arab Jumeirah",
      image: "/api/placeholder/400/320",
      location: "Дубай, ОАЭ",
      description:
        "Один из самых роскошных отелей мира, расположенный в здании в форме паруса. Предлагает обслуживание на высочайшем уровне, рестораны с мишленовскими звездами и потрясающие виды на Персидский залив.",
    },
  ];

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <Navbar />
      </div>

      <div className="pt-20">
        {" "}
        <main className="container mx-auto px-4">
          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Рекомендуемые страны
            </h2>
            <TravelCarousel
              items={recommendedCountries}
              title="Популярные направления"
            />
          </section>

          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Ближайшие события
            </h2>
            <TravelCarousel items={upcomingEvents} title="Не пропустите" />
          </section>

          <section className="py-8">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Популярные отели
            </h2>
            <TravelCarousel
              items={popularHotels}
              title="Лучшие места для проживания"
            />
          </section>
        </main>
      </div>

      <FooterLayouts />
    </div>
  );
};

export default DashboardPage;

import Navbar from "../components/Fragments/Home/Navbar";
import AboutUsLayouts from "../components/Layouts/Home/AboutUsLayouts";
import ActivityLayouts from "../components/Layouts/Home/ActivityLayouts";
import CategoryLayouts from "../components/Layouts/Home/CategoryLayouts";
import ContactUsLayouts from "../components/Layouts/Home/ContactUsLayouts";
import FooterLayouts from "../components/Layouts/Home/FooterLayouts";
import HeroLayouts from "../components/Layouts/Home/HeroLayouts";
import PromoLayouts from "../components/Layouts/Home/PromoLayouts";
import AIChat from "../components/Elements/AIChat/AIChat";

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroLayouts />
      <AboutUsLayouts />
      <CategoryLayouts />
      <PromoLayouts />
      <ActivityLayouts />
      <ContactUsLayouts />
      <FooterLayouts />
      <AIChat />
    </div>
  );
};

export default HomePage;

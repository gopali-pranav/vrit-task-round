import HeroSection from "../components/HeroSection";
import PopularCategories from "../components/PopularCategories";
import TopSection from "../components/TopSection";
import MidSection from "../components/MidSection";
import AfterMidSection from "../components/AfterMidSection";
import ClientFeedback from "../components/ClientFeedback";
import AfterFeedbackSection from "../components/AfterFeedbackSection";

const HomePages = () => {
  return (
    <div>
      <HeroSection />
      <PopularCategories />
      <TopSection />
      <MidSection />
      <AfterMidSection />
      <ClientFeedback />
      <AfterFeedbackSection />
    </div>
  );
};

export default HomePages;

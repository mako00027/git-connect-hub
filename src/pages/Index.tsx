import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import VacanciesSection from "@/components/VacanciesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <ServicesSection />
        <VacanciesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

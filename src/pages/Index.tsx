import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Team from "@/components/landing/Team";
import HowItWorks from "@/components/landing/HowItWorks";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="team">
          <Team />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

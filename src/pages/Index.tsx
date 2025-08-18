import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add scroll animation trigger
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate');
        }
      });
    };

    // Initial animation check
    animateElements();
    
    // Add scroll listener
    window.addEventListener('scroll', animateElements);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateElements);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

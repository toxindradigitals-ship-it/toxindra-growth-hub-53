import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary-dark/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-primary-foreground">
        <div className="fade-in-up animate max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Grow Your Business with Expert{" "}
            <span className="gradient-text">Digital Marketing</span>{" "}
            & Website Design
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Toxindra Digitals helps small businesses attract more customers and boost online visibility with proven strategies and creative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToContact}
              className="btn-hero text-lg px-8 py-4 h-auto"
            >
              Get Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <a href="tel:+2347086825878" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+234 708 682 5878</span>
              </a>
              <a href="mailto:toxindradigital@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">Email Us</span>
              </a>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-glow">50+</div>
              <div className="text-sm text-primary-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-glow">3+</div>
              <div className="text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-glow">100%</div>
              <div className="text-sm text-primary-foreground/70">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-glow">24/7</div>
              <div className="text-sm text-primary-foreground/70">Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
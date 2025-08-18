import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding bg-gradient-accent text-accent-foreground">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-accent-foreground/10 rounded-2xl flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg md:text-xl mb-8 text-accent-foreground/90 max-w-2xl mx-auto">
            Join 50+ successful businesses that have transformed their online presence 
            and achieved remarkable growth with proven digital strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              onClick={scrollToContact}
              className="bg-accent-foreground text-accent font-semibold px-8 py-4 rounded-lg hover:bg-accent-foreground/90 transition-all duration-300 hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <a 
              href="tel:+2347086825878"
              className="text-accent-foreground/80 hover:text-accent-foreground transition-colors font-medium"
            >
              Or call: +234 708 682 5878
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              <span className="text-accent-foreground/80">Free Strategy Session</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              <span className="text-accent-foreground/80">No Long-term Contracts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-accent-foreground rounded-full"></div>
              <span className="text-accent-foreground/80">Results Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
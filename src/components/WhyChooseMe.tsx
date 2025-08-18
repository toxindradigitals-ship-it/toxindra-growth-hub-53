import { 
  DollarSign, 
  Target, 
  Heart, 
  Palette, 
  Clock, 
  Shield 
} from "lucide-react";

const WhyChooseMe = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "High-quality digital marketing services at competitive prices that fit small business budgets."
    },
    {
      icon: Target,
      title: "Proven Results",
      description: "Track record of helping businesses increase their online visibility and customer acquisition."
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "Every project receives individual attention with strategies tailored to your specific goals."
    },
    {
      icon: Palette,
      title: "Creative Designs",
      description: "Fresh, modern designs that capture your brand personality and engage your target audience."
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality, helping you launch your campaigns faster."
    },
    {
      icon: Shield,
      title: "Reliable Support",
      description: "Ongoing support and maintenance to ensure your digital presence continues to perform."
    }
  ];

  return (
    <section id="why-choose" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Toxindra Digitals?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            When you work with me, you're not just hiring a service provider – 
            you're partnering with someone who genuinely cares about your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {benefit.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-primary-foreground/20 fade-in-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">50+</div>
              <div className="text-primary-foreground/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">98%</div>
              <div className="text-primary-foreground/70">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">150%</div>
              <div className="text-primary-foreground/70">Avg. Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-glow mb-2">24h</div>
              <div className="text-primary-foreground/70">Avg. Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
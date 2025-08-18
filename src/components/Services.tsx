import { 
  TrendingUp, 
  Globe, 
  Search, 
  Share2, 
  PenTool, 
  BarChart3,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Comprehensive marketing plans that drive growth and maximize your ROI across all digital channels.",
      features: ["Market Analysis", "Competitor Research", "Campaign Planning", "Performance Tracking"]
    },
    {
      icon: Globe,
      title: "Website Design & Optimization",
      description: "Beautiful, responsive websites that convert visitors into customers and rank well on search engines.",
      features: ["Custom Design", "Mobile Responsive", "Speed Optimization", "User Experience"]
    },
    {
      icon: Search,
      title: "SEO & Content Marketing",
      description: "Boost your search rankings and attract organic traffic with optimized content and strategic SEO.",
      features: ["Keyword Research", "Content Creation", "Technical SEO", "Link Building"]
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Engage your audience and build brand awareness across all major social media platforms.",
      features: ["Content Planning", "Community Management", "Social Advertising", "Analytics & Reporting"]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Services That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to help your business grow, 
            attract more customers, and achieve measurable success online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover-lift fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-teal rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 text-center fade-in-up">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Custom Digital Solutions
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Need something specific? I also offer email marketing, conversion optimization, 
            e-commerce solutions, and custom digital strategies tailored to your unique business needs.
          </p>
          <Button onClick={scrollToContact} className="btn-hero">
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
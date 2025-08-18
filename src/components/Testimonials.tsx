import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Local Restaurant Owner",
      text: "Toxindra transformed our online presence! Our website looks amazing and we've seen a 200% increase in online orders. The social media management has brought in so many new customers.",
      rating: 5
    },
    {
      name: "Mike Chen",
      business: "E-commerce Store",
      text: "Working with Toxindra was the best decision for our business. The SEO optimization brought us to the first page of Google, and our sales have tripled. Highly professional and results-driven!",
      rating: 5
    },
    {
      name: "Amanda Davis",
      business: "Fitness Coach",
      text: "I was struggling to get clients online until I met Toxindra. The digital marketing strategy and beautiful website design helped me build a thriving coaching business. Thank you!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it – hear from businesses that have transformed 
            their online presence and achieved remarkable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover-lift fade-in-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-accent-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-card-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center fade-in-up">
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Join 50+ Happy Clients
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to transform your business like these success stories? 
              Let's discuss how we can achieve similar results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                No Long-term Contracts
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-teal rounded-full"></div>
                100% Satisfaction Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
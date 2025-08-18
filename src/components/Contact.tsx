import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "toxindradigital@gmail.com",
      href: "mailto:toxindradigital@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone/WhatsApp",
      value: "+234 708 682 5878",
      href: "tel:+2347086825878"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigeria",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61578575975664"
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      href: "https://x.com/ToxindraD"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can transform your online presence and drive real results. 
            Get your free consultation today and take the first step toward digital success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="fade-in-up">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-card-foreground">
                Get Your Free Consultation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                    Tell me about your project *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Describe your business goals, current challenges, and what you'd like to achieve..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up">
            <div className="space-y-8">
              {/* Direct Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Get in Touch Directly
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="font-medium text-card-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="font-medium text-card-foreground">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold mb-6 text-primary">
                  Follow Me Online
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors group"
                    >
                      <social.icon className="h-5 w-5 text-primary-foreground group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                  <a
                    href="https://www.pinterest.com/toxindra/_profile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors group"
                  >
                    <span className="text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">P</span>
                  </a>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-card rounded-xl p-6">
                <h4 className="font-semibold text-card-foreground mb-4">
                  What You Get:
                </h4>
                <div className="space-y-3">
                  {[
                    "Free 30-minute strategy consultation",
                    "Custom proposal within 48 hours",
                    "No obligation or pressure",
                    "Actionable insights you can use immediately"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-teal flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
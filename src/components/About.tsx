import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Your Trusted Digital Growth Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm <strong className="text-primary">Toxindra</strong>, a passionate digital marketer and website designer 
              dedicated to helping small businesses thrive online. With years of experience in the digital landscape, 
              I understand the unique challenges entrepreneurs face when trying to establish their online presence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My mission is simple: to provide affordable, results-driven digital solutions that help your business 
              attract more customers, increase visibility, and achieve sustainable growth. Every project I take on 
              is treated with the same care and attention as if it were my own business.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-sm font-medium">Results-Driven Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-sm font-medium">Personalized Service</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-sm font-medium">Affordable Pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-teal flex-shrink-0" />
                <span className="text-sm font-medium">Creative Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Proven Results</h3>
              <p className="text-sm text-muted-foreground">Delivered successful campaigns for 50+ businesses</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
              <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-teal-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Client Focus</h3>
              <p className="text-sm text-muted-foreground">100% client satisfaction with personalized attention</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift col-span-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Strategic Approach</h3>
              <p className="text-sm text-muted-foreground">
                Every strategy is tailored to your specific business goals and target audience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
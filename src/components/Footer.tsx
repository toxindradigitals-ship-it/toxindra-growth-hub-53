import { Mail, Phone, Facebook, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Toxindra Digitals</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for digital marketing and website design. 
              Helping small businesses grow their online presence and achieve remarkable results.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578575975664"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/ToxindraD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.pinterest.com/toxindra/_profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <span className="font-bold text-sm">P</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:toxindradigital@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">toxindradigital@gmail.com</span>
              </a>
              <a
                href="tel:+2347086825878"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">+234 708 682 5878</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Toxindra Digitals. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-accent-light transition-all duration-300 group"
          >
            <ArrowUp className="h-4 w-4 text-accent-foreground group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
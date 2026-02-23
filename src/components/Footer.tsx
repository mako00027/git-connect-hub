import { Anchor, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Vacancies", href: "#vacancies" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Anchor className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>SeaCrew</span>
            </a>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Leading maritime recruitment agency connecting skilled seafarers with top shipping companies worldwide. Your trusted partner for a successful career at sea.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:info@seacrew.com"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Hills Highway 1111</li>
              <li>Marocco, 23-412</li>
              <li>
                <a href="tel:+0000" className="hover:text-gold transition-colors">
                  +0000
                </a>
              </li>
              <li>
                <a href="mailto:info@seacrew.com" className="hover:text-gold transition-colors">
                  info@seacrew.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60">
          <p>&copy; 2025 SeaCrew Maritime Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

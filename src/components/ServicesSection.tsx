import { Ship, Anchor, Users, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const shipTypes = [
  { name: "Bulk Carriers", icon: Ship },
  { name: "Container Ships", icon: Ship },
  { name: "General Cargo", icon: Ship },
  { name: "Offshore Vessels", icon: Anchor },
];

const services = [
  {
    icon: Users,
    title: "Crew Recruitment",
    description: "We source and recruit qualified maritime professionals for all positions, from ratings to senior officers.",
  },
  {
    icon: FileText,
    title: "Documentation Support",
    description: "Complete assistance with visa processing, certificates, and all required maritime documentation.",
  },
  {
    icon: Globe,
    title: "Global Placement",
    description: "Partnerships with leading shipping companies worldwide, offering opportunities across international waters.",
  },
];

const ServicesSection = () => {
  const handleApplyClick = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif" }}>Our Services</h2>
          <p className="section-subtitle">
            We provide comprehensive maritime recruitment solutions, connecting skilled seafarers with leading shipping companies worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-ocean/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-ocean" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Vessel Types We Work With
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              We recruit for a wide range of vessel types, ensuring we have the right position for your skills and experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {shipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 hover:bg-primary-foreground/15 rounded-lg p-4 text-center transition-colors"
              >
                <type.icon className="h-8 w-8 text-gold mx-auto mb-2" />
                <p className="text-primary-foreground text-sm font-medium">{type.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="accent" size="lg" onClick={handleApplyClick}>
              Apply for a Position
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

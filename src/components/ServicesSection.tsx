import { useState, useCallback } from "react";
import {
  Ship,
  FileText,
  Navigation,
  CalendarClock,
  GraduationCap,
  Wallet,
  Plane,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  UserX,
  Scale,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { vessels, vesselCategories, type VesselCategory } from "@/data/vessels";

const services = [
  {
    icon: FileText,
    title: "Seafarer employment agreement",
    description:
      "Tailored contracts designed for maritime employment requirements, guaranteeing legal adherence and crew contentment for efficient operations.",
  },
  {
    icon: Navigation,
    title: "Marine deployment",
    description:
      "Skillfully coordinating crew placements across the globe, maximizing effectiveness and expertise on all vessel categories throughout the seas.",
  },
  {
    icon: CalendarClock,
    title: "Scheduling",
    description:
      "Meticulous scheduling and rotation management for uninterrupted crew changeovers and operational flow, ensuring vessels remain fully manned at all times.",
  },
  {
    icon: GraduationCap,
    title: "Training & development",
    description:
      "Cultivating maritime expertise through customized programs, boosting competencies, safety awareness, and professional advancement for seafarers in the maritime sector.",
  },
  {
    icon: Wallet,
    title: "Payroll & Pay slips",
    description:
      "Precise and punctual payroll management, complete with comprehensive pay slips, ensuring clear financial dealings for both vessel operators and crew.",
  },
  {
    icon: Plane,
    title: "Travel arrangement",
    description:
      "Optimized travel coordination for crew members, enabling smooth mobility to and from vessels, enhancing operational preparedness.",
  },
  {
    icon: HeartPulse,
    title: "Insurance & health schemes",
    description:
      "Bespoke insurance and healthcare packages, protecting crew member welfare and delivering reassurance for vessel owners.",
  },
  {
    icon: Stethoscope,
    title: "Medical claims arrangements",
    description:
      "Streamlined handling of medical claims, guaranteeing swift responsiveness and premium medical attention for seafarers.",
  },
  {
    icon: ShieldCheck,
    title: "Social security treatment",
    description:
      "Professional guidance on social security affairs, ensuring adherence to international standards and addressing the needs of crew members.",
  },
  {
    icon: UserX,
    title: "Termination procedure",
    description:
      "Orderly and compliant termination processes, safeguarding the rights of both vessel operators and crew members in the maritime industry.",
  },
  {
    icon: Scale,
    title: "Legal advice on social matters",
    description:
      "Knowledgeable legal counsel on social and employment matters, assisting clients in navigating intricate maritime regulations with assurance.",
  },
  {
    icon: Handshake,
    title: "Acting as agent or direct employer",
    description:
      "Flexible solutions, providing the option between agency representation and direct hire to suit varied workforce needs.",
  },
];

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState<VesselCategory>("bulk_carriers");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentVessels = vessels[activeCategory];
  const currentVessel = currentVessels[selectedIndex];

  const handleCategoryChange = useCallback((category: VesselCategory) => {
    setActiveCategory(category);
    setSelectedIndex(0);
    setDropdownOpen(false);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? currentVessels.length - 1 : prev - 1));
  }, [currentVessels.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === currentVessels.length - 1 ? 0 : prev + 1));
  }, [currentVessels.length]);

  const handleSelectVessel = useCallback((index: number) => {
    setSelectedIndex(index);
    setDropdownOpen(false);
  }, []);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif" }}>Global services</h2>
          <p className="section-subtitle">
            Our team is working hard to offer you the best recruitment process, giving you all the cards to turn the advantage of a recruitment process to your side.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="w-14 h-14 bg-ocean/10 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-7 w-7 text-ocean" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {vesselCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gold text-accent-foreground shadow-lg"
                    : "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                }`}
              >
                <Ship className="h-5 w-5" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Vessel Dropdown */}
          <div className="relative max-w-md mx-auto mb-8">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors"
            >
              <span className="font-medium">{currentVessel.name}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute z-50 w-full mt-1 bg-card border border-border rounded-lg shadow-xl max-h-60 overflow-y-auto">
                {currentVessels.map((vessel, index) => (
                  <button
                    key={vessel.imo}
                    onClick={() => handleSelectVessel(index)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-muted ${
                      index === selectedIndex
                        ? "bg-ocean/10 text-ocean font-semibold"
                        : "text-foreground"
                    } ${index === 0 ? "rounded-t-lg" : ""} ${index === currentVessels.length - 1 ? "rounded-b-lg" : ""}`}
                  >
                    {vessel.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vessel Display */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Photo Carousel */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-primary-foreground/5">
                <img
                  src={currentVessel.image}
                  alt={currentVessel.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-colors"
                aria-label="Previous vessel"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-2 shadow-lg transition-colors"
                aria-label="Next vessel"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/80 text-foreground text-xs font-medium px-3 py-1 rounded-full">
                {selectedIndex + 1} / {currentVessels.length}
              </div>
            </div>

            {/* Description */}
            <div className="text-primary-foreground space-y-4">
              <h4 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                {currentVessel.name}
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">IMO Number</span>
                  <span className="font-medium">{currentVessel.imo}</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">DWT</span>
                  <span className="font-medium">{currentVessel.dwt.toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">Type</span>
                  <span className="font-medium">{currentVessel.type}</span>
                </div>
                <div className="flex justify-between border-b border-primary-foreground/20 pb-2">
                  <span className="text-primary-foreground/70">Built</span>
                  <span className="font-medium">{currentVessel.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-foreground/70">Flag</span>
                  <span className="font-medium">{currentVessel.flag}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Phone, Mail } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const vacancies = [
  { rank: "Master", vesselType: "Bulk Carrier", embarkation: "ASAP", dwt: "82,000" },
  { rank: "Chief Officer", vesselType: "Container Ship", embarkation: "February 2026", dwt: "65,000" },
  { rank: "2nd Engineer", vesselType: "Bulk Carrier", embarkation: "March 2026", dwt: "75,000" },
  { rank: "3rd Officer", vesselType: "Container Ship", embarkation: "ASAP", dwt: "45,000" },
  { rank: "AB Seaman", vesselType: "Bulk Carrier", embarkation: "January 2026", dwt: "58,000" },
  { rank: "Electrician", vesselType: "Container Ship", embarkation: "ASAP", dwt: "52,000" },
];

const VacanciesSection = () => {
  return (
    <section id="vacancies" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif" }}>Current Vacancies</h2>
          <p className="section-subtitle">
            Explore our latest job opportunities and find the perfect position for your maritime career.
          </p>
        </div>

        <div className="bg-ocean text-primary-foreground rounded-xl p-6 md:p-8 mb-10 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Interested in any of these positions?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your qualifications and apply for your next opportunity at sea.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+0000"
              className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">+0000</span>
            </a>
            <a
              href="mailto:jobs@seacrew.com"
              className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="font-medium">jobs@seacrew.com</span>
            </a>
          </div>
        </div>

        <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
          <Table>
            <TableHeader>
              <TableRow className="bg-navy hover:bg-navy">
                <TableHead className="text-primary-foreground font-semibold">Rank</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Vessel's Type</TableHead>
                <TableHead className="text-primary-foreground font-semibold">Embarkation</TableHead>
                <TableHead className="text-primary-foreground font-semibold text-right">DWT</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vacancies.map((vacancy, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium text-navy">{vacancy.rank}</TableCell>
                  <TableCell className="text-foreground">{vacancy.vesselType}</TableCell>
                  <TableCell className="text-foreground">{vacancy.embarkation}</TableCell>
                  <TableCell className="text-right text-foreground">{vacancy.dwt}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-center text-muted-foreground mt-6">
          * New vacancies are added regularly. Check back often or subscribe to our newsletter.
        </p>
      </div>
    </section>
  );
};

export default VacanciesSection;

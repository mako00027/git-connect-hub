import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject is too long"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+380 63 942 64 95",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ncpgcrewing.com",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you shortly.",
    });

    setFormData({ fullName: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h2>
          <p className="section-subtitle">
            Have questions or ready to apply? Get in touch with our team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Get in Touch
            </h3>
            <p className="text-muted-foreground mb-8">
              We're here to help you find the perfect maritime position. Reach out to us through any of the channels below, or fill out the contact form and we'll respond within 24 hours.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-ocean/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-ocean" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-navy mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? "border-destructive" : ""}
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Write your message here..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full bg-navy hover:bg-navy-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

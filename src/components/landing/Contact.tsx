import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@formico.dev",
    href: "mailto:hello@formico.dev"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: "#"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 9AM-6PM EST",
    href: "#"
  }
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Let's Start Your <span className="text-primary">Project</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch and let's discuss how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form - Takes up 2 columns */}
            <div className="lg:col-span-2">
              <Card className="shadow-medium animate-slide-up">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input 
                          id="firstName"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input 
                          id="lastName"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input 
                        id="company"
                        placeholder="Your Company Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select 
                        id="service"
                        className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">App Development</option>
                        <option value="pos">POS Systems</option>
                        <option value="video">Video Services</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Project Details
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Tell us about your project, goals, and timeline..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                      size="lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Highlighted Quick Response Guarantee - Takes up 1 column */}
            <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-primary p-8 rounded-2xl shadow-glow text-white h-full flex flex-col justify-center">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-heading font-bold text-2xl">
                      ⚡ Quick Response Guarantee
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      We respond to all inquiries within <span className="font-bold text-accent-light">24 hours</span>. 
                      For urgent projects, call us directly for immediate assistance.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4 pt-4 border-t border-white/20">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-5 h-5" />
                      <a href="mailto:hello@formico.dev" className="hover:text-accent-light transition-colors">
                        hello@formico.dev
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+15551234567" className="hover:text-accent-light transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">24h</div>
                      <div className="text-white/80 text-sm">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-white/80 text-sm">Satisfaction Rate</div>
                    </div>
                  </div>
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
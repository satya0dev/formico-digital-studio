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

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
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

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="font-heading font-bold text-2xl mb-6">Get in touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you succeed. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <div 
                      key={item.label}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-sm text-muted-foreground">{item.label}</p>
                        {item.href && item.href !== "#" ? (
                          <a 
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quick Response Promise */}
              <div className="bg-gradient-card p-6 rounded-xl shadow-soft">
                <h4 className="font-heading font-semibold text-lg mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  call us directly for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, ShoppingCart, Video, ChevronDown, ChevronUp } from "lucide-react";

const services = [
  {
    id: "web",
    title: "Web Development",
    description: "Beautiful, responsive websites that convert visitors into customers",
    icon: Globe,
    details: [
      "Custom Website Design & Development",
      "E-commerce Solutions with Payment Integration",
      "Landing Pages that Convert",
      "SEO Optimization & Performance",
      "Content Management Systems",
      "Progressive Web Applications"
    ],
    technologies: ["React", "Next.js", "WordPress", "Shopify", "WooCommerce"]
  },
  {
    id: "mobile",
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    icon: Smartphone,
    details: [
      "iOS Native Apps (Swift/SwiftUI)",
      "Android Native Apps (Kotlin/Java)",
      "Cross-platform with React Native",
      "Flutter Development",
      "Kotlin Multiplatform (KMP)",
      "App Store Optimization & Publishing"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "KMP"]
  },
  {
    id: "pos",
    title: "POS Systems",
    description: "Complete point-of-sale solutions for retail stores and restaurants",
    icon: ShoppingCart,
    details: [
      "Restaurant POS with Table Management",
      "Retail POS with Inventory Tracking",
      "Payment Processing Integration",
      "Real-time Analytics & Reporting",
      "Multi-location Support",
      "Staff Management & Permissions"
    ],
    technologies: ["Cloud-based", "Offline Mode", "Payment APIs", "Analytics"]
  },
  {
    id: "video",
    title: "Video Services",
    description: "Professional video production and motion graphics for marketing",
    icon: Video,
    details: [
      "Professional Video Editing",
      "User-Generated Content (UGC)",
      "Motion Graphics & Animations",
      "Social Media Video Ads",
      "Product Demo Videos",
      "Brand Storytelling Content"
    ],
    technologies: ["After Effects", "Premiere Pro", "DaVinci Resolve", "Blender"]
  }
];

const Services = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digital solutions to transform your business and reach your goals
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedCard === service.id;
            
            return (
              <Card 
                key={service.id}
                className={`
                  group cursor-pointer transition-all duration-300 hover:shadow-medium
                  ${isExpanded ? 'shadow-large scale-[1.02]' : 'hover:scale-[1.01]'}
                  animate-slide-up
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => toggleCard(service.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                </CardHeader>

                {isExpanded && (
                  <CardContent className="animate-accordion-down">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">What we offer:</h4>
                        <ul className="space-y-2">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
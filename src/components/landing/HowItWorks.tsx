import { MessageSquare, PenTool, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Consultation",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    step: "02", 
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, designs, and project roadmaps tailored to your specific needs and brand.",
    icon: PenTool,
    color: "text-accent"
  },
  {
    step: "03",
    title: "Development",
    description: "We build your solution using cutting-edge technologies, ensuring quality, performance, and scalability.",
    icon: Rocket,
    color: "text-primary"
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We deploy your project and provide ongoing support, maintenance, and optimization to ensure continued success.",
    icon: Headphones,
    color: "text-accent"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven process ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div 
                  key={step.step}
                  className="relative group animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Connection Line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-accent/30 transform translate-x-4 z-0"></div>
                  )}
                  
                  <div className="relative bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:scale-105 border border-border/50">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
                      <span className="font-heading font-bold text-white text-lg">{step.step}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-lg bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-secondary/70 transition-colors ${step.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-heading font-semibold text-xl">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-medium">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help transform your business with digital solutions.
              </p>
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-medium">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
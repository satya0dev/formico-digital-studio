import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight text-white">
                Digital form for your{" "}
                <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  Business
                </span>
              </h1>
              <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white/90">
                with Formico
              </h2>
            </div>
            
            <p className="text-xl text-white/80 max-w-lg leading-relaxed">
              Transform your business with cutting-edge digital solutions. From stunning websites to powerful mobile apps, we craft technology that drives growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Digital transformation with Formico" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md rounded-lg p-3">
                <div className="w-3 h-3 bg-primary-glow rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
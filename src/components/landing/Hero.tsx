import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-accent/15 rounded-full blur-md animate-pulse delay-1500"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
              Digital form for your{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-accent-light to-white bg-clip-text text-transparent">
                  Business
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-accent rounded-full"></div>
              </span>
            </h1>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white/90">
              with <span className="text-accent-light">Formico</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge digital solutions. From stunning websites to powerful mobile apps, 
            we craft technology that drives growth and delivers results.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-glow hover:shadow-glow transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              View Our Work
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-white/60 text-sm mb-4">Trusted by businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold">50+</span>
                <span className="text-white/80 ml-1">Projects</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold">100%</span>
                <span className="text-white/80 ml-1">Satisfaction</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white font-semibold">24/7</span>
                <span className="text-white/80 ml-1">Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
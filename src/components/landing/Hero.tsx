import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-accent/30 to-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-primary/20 to-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-accent/25 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Dynamic grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px, 40px 40px',
              animation: 'float 8s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Floating tech icons */}
        <div className="absolute top-1/4 left-16 opacity-20 animate-float">
          <Code2 className="w-8 h-8 text-white" />
        </div>
        <div className="absolute top-1/3 right-20 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div className="absolute bottom-1/3 left-20 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="w-7 h-7 text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-accent-light" />
              <span className="text-white/80 text-sm font-medium">Transforming businesses since 2020</span>
            </div>
          </div>

          {/* Main Heading with Advanced Typography */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-8xl leading-tight">
              <span className="block text-white mb-2">Digital form for your</span>
              <span 
                className="block bg-gradient-to-r from-accent-light via-white to-accent-light bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]"
              >
                Business
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mt-4">
                with <span className="text-accent-light">Formico</span>
              </span>
            </h1>
          </div>
          
          {/* Enhanced Description */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
              We craft <span className="font-semibold text-accent-light">cutting-edge digital solutions</span> that transform 
              your vision into reality. From stunning websites to powerful mobile apps, 
              we build technology that <span className="font-semibold text-white">drives growth</span> and delivers exceptional results.
            </p>
          </div>
          
          {/* Modern CTA Section */}
          <div className="animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                size="lg" 
                className="group bg-accent hover:bg-accent-light text-accent-foreground shadow-glow hover:shadow-xl transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-2xl animate-glow-pulse"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 px-10 py-6 text-lg font-semibold rounded-2xl backdrop-blur-md"
              >
                View Our Work
                <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="pt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-white/50 text-sm mb-6 uppercase tracking-wider font-medium">Trusted by innovative companies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">150+</div>
                  <div className="text-white/70 text-sm">Projects Delivered</div>
                </div>
              </div>
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-white/70 text-sm">Expert Support</div>
                </div>
              </div>
              <div className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5★</div>
                  <div className="text-white/70 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/50 text-xs font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
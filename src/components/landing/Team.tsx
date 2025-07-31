import { Users, Star, Award, Target } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate team of 20+ developers, designers, and editors dedicated to bringing your vision to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group animate-scale-in">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">20+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>

            <div className="text-center group animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>

            <div className="text-center group animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>

            <div className="text-center group animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* Team Description */}
          <div className="bg-gradient-to-br from-secondary/50 to-background border border-border rounded-3xl p-8 md:p-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center space-y-6">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                Expertise That Drives Results
              </h3>
              
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our diverse team combines technical excellence with creative innovation. From seasoned developers 
                who architect scalable solutions to creative designers who craft stunning interfaces, and skilled 
                editors who polish every detail—we work together to deliver exceptional digital experiences.
              </p>

              <div className="grid md:grid-cols-3 gap-8 pt-8">
                <div className="space-y-3">
                  <div className="text-primary font-semibold">Developers</div>
                  <p className="text-sm text-muted-foreground">
                    Full-stack experts in React, Node.js, mobile development, and cutting-edge technologies
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-primary font-semibold">Designers</div>
                  <p className="text-sm text-muted-foreground">
                    UI/UX specialists who create beautiful, user-centered designs that convert
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="text-primary font-semibold">Editors</div>
                  <p className="text-sm text-muted-foreground">
                    Content creators and video editors who enhance your brand's digital presence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
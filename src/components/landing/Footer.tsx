import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="font-heading font-bold text-2xl">
              <span className="text-white">Form</span>
              <span className="text-accent-light">ico</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Transforming businesses with cutting-edge digital solutions. 
              Your success is our mission.
            </p>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">New York, NY</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent-light transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">App Development</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">POS Systems</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Video Services</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent-light transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Our Work</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent-light transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@formico.dev" 
                className="flex items-center gap-2 text-white/70 hover:text-accent-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@formico.dev</span>
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center gap-2 text-white/70 hover:text-accent-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Formico. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-accent-light transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent-light transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
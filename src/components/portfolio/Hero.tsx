import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import headshot from "@/assets/lynette-headshot.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-card">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <img
              src={headshot}
              alt="Lynette Njuguini Mwangi"
              className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-neon"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <div className="space-y-2 mb-4">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-3 h-3 mr-1" />
              Nairobi, Kenya
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-2">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Lynette
              </span>
            </h1>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              Njuguini Mwangi
            </h1>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <Badge variant="outline" className="border-primary text-primary">
                Cybersecurity Analyst
              </Badge>
              <Badge variant="outline" className="border-accent text-accent">
                IT Support Technician
              </Badge>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Detail-oriented cybersecurity professional with hands-on experience in threat detection, 
            network monitoring, and vulnerability assessments. Committed to delivering secure IT environments 
            through continuous learning and innovation.
          </p>

          {/* Contact Actions */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <Button variant="default" size="lg" className="group">
              <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              lynette23mwangi@gmail.com
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              0796 787865
            </Button>
          </div>

          <Button 
            variant="outline" 
            size="lg" 
            className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a href="https://linkedin.com/in/lynette-irungu-8766612b4" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
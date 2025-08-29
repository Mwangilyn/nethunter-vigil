import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail, Phone, Linkedin, MapPin, ChevronDown, Download, MessageCircle } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="mb-4 bg-secondary/50 border border-primary/20">
              <MapPin className="w-3 h-3 mr-1" />
              Nairobi, Kenya
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Lynette
              </span>
            </h1>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              Njuguini Mwangi
            </h1>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-sm">
                Cybersecurity Analyst
              </Badge>
              <Badge variant="outline" className="border-accent text-accent px-4 py-2 text-sm">
                IT Support Technician
              </Badge>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Detail-oriented cybersecurity professional with hands-on experience in threat detection, 
            network monitoring, and vulnerability assessments. Committed to delivering secure IT environments 
            through continuous learning and innovation.
          </p>

          {/* Contact Dropdown */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="default" size="lg" className="group bg-gradient-primary hover:shadow-elegant">
                  <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Contact Me
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-sm border border-border/50 z-50">
                <DropdownMenuItem className="hover:bg-primary/10">
                  <Mail className="w-4 h-4 mr-2" />
                  lynette23mwangi@gmail.com
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-primary/10">
                  <Phone className="w-4 h-4 mr-2" />
                  0796 787865
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-primary/10">
                  <a href="https://linkedin.com/in/lynette-irungu-8766612b4" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Navigation Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="lg" className="group border-primary/20 hover:border-primary hover:shadow-elegant">
                  Portfolio Sections
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover/95 backdrop-blur-sm border border-border/50 z-50">
                <DropdownMenuItem onClick={() => scrollToSection('skills')} className="hover:bg-primary/10 cursor-pointer">
                  View Skills
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('projects')} className="hover:bg-primary/10 cursor-pointer">
                  View Projects
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('experience')} className="hover:bg-primary/10 cursor-pointer">
                  View Experience
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection('education')} className="hover:bg-primary/10 cursor-pointer">
                  View Education
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="lg" className="group border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
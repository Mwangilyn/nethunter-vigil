import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Network, 
  Search, 
  Monitor, 
  Server, 
  Terminal,
  Users,
  FileText,
  ChevronDown,
  Filter
} from "lucide-react";
import { useState } from "react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const skillCategories = [
    {
      icon: Shield,
      title: "Network Security & Analysis",
      skills: ["Threat Detection", "Traffic Analysis", "Incident Response", "Security Monitoring"],
      type: "security"
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      skills: ["Nmap", "Nessus", "Network Scanning", "Security Auditing"],
      type: "security"
    },
    {
      icon: Monitor,
      title: "Security Tools",
      skills: ["Splunk", "Snort", "Wireshark", "IDS/IPS Configuration"],
      type: "technical"
    },
    {
      icon: Server,
      title: "Systems Administration",
      skills: ["Windows Server", "Kali Linux", "Ubuntu", "VirtualBox"],
      type: "technical"
    },
    {
      icon: Terminal,
      title: "Technical Skills",
      skills: ["Firewall Management", "Virtual Labs", "System Security", "Network Monitoring"],
      type: "technical"
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Technical Reporting", "Problem Solving", "Continuous Learning"],
      type: "soft"
    }
  ];

  const filteredCategories = selectedCategory === "all"
    ? skillCategories 
    : skillCategories.filter(cat => cat.type === selectedCategory);

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive cybersecurity expertise across multiple domains and technologies
          </p>
          
          {/* Skills Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="lg" className="group border-primary/20 hover:border-primary hover:shadow-elegant">
                <Filter className="w-4 h-4 mr-2" />
                Filter Skills: {selectedCategory === "all" ? "All Categories" : selectedCategory}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-popover/95 backdrop-blur-sm border border-border/50 z-50">
              <DropdownMenuItem onClick={() => setSelectedCategory("all")} className="hover:bg-primary/10 cursor-pointer">
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("security")} className="hover:bg-primary/10 cursor-pointer">
                Security & Analysis
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("technical")} className="hover:bg-primary/10 cursor-pointer">
                Technical Skills
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedCategory("soft")} className="hover:bg-primary/10 cursor-pointer">
                Soft Skills
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
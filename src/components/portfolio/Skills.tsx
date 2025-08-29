import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Network, 
  Search, 
  Monitor, 
  Server, 
  Terminal,
  Users,
  FileText
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Shield,
      title: "Network Security & Analysis",
      skills: ["Threat Detection", "Traffic Analysis", "Incident Response", "Security Monitoring"]
    },
    {
      icon: Search,
      title: "Vulnerability Assessment",
      skills: ["Nmap", "Nessus", "Network Scanning", "Security Auditing"]
    },
    {
      icon: Monitor,
      title: "Security Tools",
      skills: ["Splunk", "Snort", "Wireshark", "IDS/IPS Configuration"]
    },
    {
      icon: Server,
      title: "Systems Administration",
      skills: ["Windows Server", "Kali Linux", "Ubuntu", "VirtualBox"]
    },
    {
      icon: Terminal,
      title: "Technical Skills",
      skills: ["Firewall Management", "Virtual Labs", "System Security", "Network Monitoring"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Technical Reporting", "Problem Solving", "Continuous Learning"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity expertise across multiple domains and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-neon transition-all duration-300 bg-gradient-card border-border/50">
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
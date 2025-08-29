import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Network, BarChart3, Eye } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Shield,
      title: "Intrusion Detection Lab using Snort",
      description: "Set up Snort IDS on Kali Linux to monitor suspicious traffic from a simulated attack on Metasploitable2. Created and tuned custom Snort rules to detect brute force attempts and port scans.",
      tools: ["Snort", "Kali Linux", "Metasploitable2", "Wireshark"],
      impact: "Demonstrated ability to detect and log malicious behavior in real time.",
      color: "primary"
    },
    {
      icon: Network,
      title: "Network Vulnerability Assessment",
      description: "Scanned a virtual network for open ports and vulnerabilities using Nmap and Nikto. Analyzed results to identify outdated software and misconfigurations.",
      tools: ["Nmap", "Nikto", "Kali Linux"],
      impact: "Strengthened understanding of network hardening techniques.",
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "SIEM Analysis using Splunk",
      description: "Created dashboards to monitor and visualize log data from Windows Server and Ubuntu systems. Simulated brute force login attempts and analyzed log patterns.",
      tools: ["Splunk", "Windows Server", "Ubuntu"],
      impact: "Gained real-world experience in log correlation and security alerting.",
      color: "primary"
    },
    {
      icon: Eye,
      title: "Packet Sniffing and Analysis with Wireshark",
      description: "Captured and analyzed HTTP, DNS, and FTP traffic on a test network. Identified potential data leakage and suspicious communications.",
      tools: ["Wireshark", "Windows", "Ubuntu"],
      impact: "Improved traffic analysis skills and understanding of normal vs. abnormal behavior.",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Cybersecurity <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hands-on experience in threat detection, vulnerability assessment, and security monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="group hover:shadow-card hover:scale-105 transition-all duration-300 bg-gradient-card border-border/50">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      project.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'
                    } group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 ${
                        project.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tools Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <Badge key={toolIndex} variant="outline" className={`${
                          project.color === 'primary' ? 'border-primary text-primary' : 'border-accent text-accent'
                        }`}>
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-secondary/30 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold mb-1">Impact:</h4>
                    <p className="text-sm text-muted-foreground">{project.impact}</p>
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

export default Projects;
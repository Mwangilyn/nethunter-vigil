import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Globe } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Formal education and certifications in cybersecurity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Moringa School</h3>
                  <p className="text-primary font-medium mb-2">Cybersecurity Fundamentals</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Comprehensive coursework in networking, security principles, Linux basics, and threat detection
                  </p>
                  <Badge variant="secondary">2024</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-secondary/30 rounded-lg">
                  <h3 className="font-semibold mb-2">Cybersecurity Fundamentals</h3>
                  <p className="text-muted-foreground text-sm mb-2">Moringa School</p>
                  <Badge variant="outline" className="border-accent text-accent">Certified</Badge>
                </div>
                <div className="p-3 bg-muted/30 rounded-lg border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground">
                    <strong>Future Goals:</strong> CompTIA Security+, IBM Cybersecurity Analyst certification
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="md:col-span-2 bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Languages & Interests</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Languages</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span>English</span>
                      <Badge variant="secondary">Fluent</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Swahili</span>
                      <Badge variant="secondary">Fluent</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Tech Blogs</Badge>
                    <Badge variant="outline">Cybersecurity News</Badge>
                    <Badge variant="outline">Travel</Badge>
                    <Badge variant="outline">Music</Badge>
                    <Badge variant="outline">Cooking</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
import Hero from "@/components/portfolio/Hero";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
    </div>
  );
};

export default Portfolio;
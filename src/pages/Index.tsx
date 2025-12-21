import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Education />
        <Skills />
        <Experience />

        {/* Research Work section added per request */}
        <section id="research" className="py-20 px-4">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="section-title">Research Work</h2>
              <p className="section-subtitle">Selected research activities and publications.</p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg p-6 border border-border card-hover">
                <h3 className="text-lg font-semibold text-foreground mb-2">Research Topic</h3>
                <p className="text-muted-foreground mb-4">Research on reinforcement learning for load-aware UAV Wi-Fi association and 3D positioning to improve throughput, fairness, and stability.</p>

                <h3 className="text-lg font-semibold text-foreground mb-2">Publication</h3>
                <p className="text-muted-foreground">Haripriya, Kotapati. Augmented Reality-Based Navigation for Nearby Facility Exploration: Enhancing Spatial Awareness and User Experience. International Journal of Creative Research Thoughts (IJCRT), 2025.</p>
              </div>
            </div>
          </div>
        </section>

        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

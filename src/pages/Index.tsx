import { motion } from "framer-motion";
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

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {/* Render research entries using the same card pattern and animations as Experience */}
                <div>

                  <div className="space-y-6">
                    {/* Ongoing Research Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-lg p-6 border border-border card-hover"
                      tabIndex={0}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6"/><path d="M12 4v4"/><path d="M4 12h16"/></svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-xl font-semibold text-foreground">Reinforcement learning for load-aware UAV Wi‑Fi association and 3D positioning</h4>
                            <span className="text-xs font-medium px-2 py-1 bg-yellow-100 text-yellow-800 rounded">Ongoing</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Publication Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.08 }}
                      viewport={{ once: true }}
                      className="bg-card rounded-lg p-6 border border-border card-hover"
                      tabIndex={0}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20v-6"/><path d="M12 4v4"/><path d="M4 12h16"/></svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h4 className="text-xl font-semibold text-foreground">Augmented Reality-Based Navigation for Nearby Facility Exploration: Enhancing Spatial Awareness and User Experience</h4>
                            <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-800 rounded">Completed</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">International Journal of Creative Research Thoughts (IJCRT), 2025.</p>
                          <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                            <a
                              href="/documents/IJCRT2504447.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                              aria-label="View research paper PDF"
                            >
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                              </svg>
                              View Paper (PDF)
                            </a>
                            <span className="text-xs text-muted-foreground">740 KB</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
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

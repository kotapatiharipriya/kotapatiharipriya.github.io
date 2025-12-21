import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{" "}
            <span className="text-primary">Haripriya Kotapati</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            M.S. Computer Engineering (Machine Learning) @San Diego State University || 
            B.E. Computer Engineering @Osmania University || 
            Data Science & AI Enthusiast || Machine Learning Researcher
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-muted-foreground text-muted-foreground hover:bg-muted"
              asChild
            >
              <a
                href={assetPath("documents/Resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/kotapatiharipriya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/hari-priya-kotapati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:kotapatiharipriya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

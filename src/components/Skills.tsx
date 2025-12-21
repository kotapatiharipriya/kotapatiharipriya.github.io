import { motion } from "framer-motion";

const skillsData = {
  "Programming Languages": ["Python", "Java"],
  "Machine Learning & AI": ["PyTorch", "TensorFlow", "Scikit-Learn"],
  "Data Science Tools": ["NumPy", "Pandas", "Jupyter Notebook"],
  "Developer Tools": ["VS Code", "Docker", "Git"],
  "Coursework": ["Operating Systems", "Database Systems", "Artificial Intelligence", "Machine Learning", "Computer Networks", "Data Structures"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    company: "E-Cell IIT Hyderabad",
    duration: "May - June 2024",
    description: [
      "Predictive modelling on large scale datasets using Python and Scikit-Learn for regression based analysis.",
      "Data preprocessing, feature engineering and parameter optimization using Pandas, NumPy and GridSearchCV.",
      "Model evaluation through cross-validation, RMSE, and R² to assess accuracy and generalization performance.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Swecha Organization",
    duration: "May - June 2023",
    description: [
      "Machine learning techniques on real-world datasets using Python and Jupyter Notebook, focusing on generating practical insights.",
      "Data cleaning, preprocessing, and exploratory analysis to convert raw information into structured inputs for model development.",
      "Integration of AI models with REST APIs and microservices, enabling deployment within larger application systems.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional experience and roles.</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

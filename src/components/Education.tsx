import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science",
    field: "Computer Engineering (Machine Learning)",
    institution: "San Diego State University",
    location: "San Diego, California, USA",
    // Master's CGPA intentionally omitted per profile update
    duration: "August 2025 - in progress",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "Osmania University",
    location: "Hyderabad, Telangana, India",
    cgpa: "3.54 / 4",
    duration: "November 2021 - April 2025",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and qualifications.</p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 border border-border card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.field}</p>
                  <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    {edu.cgpa && (
                      <>
                        <span className="hidden sm:inline">•</span>
                        <span>CGPA: {edu.cgpa}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

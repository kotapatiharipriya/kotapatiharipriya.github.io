import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/utils";

const asset = (path: string) => assetPath(path);

const certifications = [
  {
    title: "Google Data Analytics",
    issuer: "Google",
    date: "April 2024",
    image: asset("cert-dataanlytics.png"),
    pdf: asset("documents/DataAnlytics.pdf"),
  },
  {
    title: "Summer of AI Internship Program – Swecha",
    issuer: "Swecha",
    date: "May 14, 2024 – June 21, 2024",
    image: asset("cert-swecha.svg"),
    pdf: "",
    description: "Participated in the Summer of AI Internship Program at Swecha. Contributions were instrumental in advancing the mission to build AI solutions for preserving culture and supporting language advancement.",
  },
  {
    title: "Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "May 2024",
    image: asset("cert-cybersecurity.png"),
    pdf: asset("documents/cybersecurity.pdf"),
  },
  {
    title: "Smart India Hackathon",
    issuer: "Ministry of Education (Smart India)",
    date: "2024",
    image: asset("cert-smartindia.png"),
    pdf: asset("documents/smartindia.pdf"),
  },
  {
    title: "Java Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "January 2023",
    image: asset("cert-java.png"),
    pdf: asset("documents/Java.pdf"),
  },
  {
    title: "PHP & MySQL Training",
    issuer: "Spoken Tutorial Project, IIT Bombay",
    date: "June 2023",
    image: asset("cert-phpandsql.png"),
    pdf: asset("documents/PHPandSQL.pdf"),
  },
  {
    title: "Microsoft Student Technical Training – Cloud Skills Challenge",
    issuer: "Microsoft Student Technical Training",
    date: "",
    image: asset("cert-azure.png"),
    pdf: "https://www.linkedin.com/posts/hari-priya-kotapati_training-activity-7172843516979609601-5pav?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD25WbABTV8qyBOQqYobAPkE8q2PCbmiipg",
    description: "Excited to share that I've successfully completed the Microsoft Student Technical Training Cloud Skills Challenge!",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements in technology.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-border card-hover"
            >
              <div className="aspect-video overflow-hidden cursor-pointer">
                {cert.pdf ? (
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                ) : (
                  <div>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                {cert.description && (
                  <p className="text-sm text-foreground mb-2">{cert.description}</p>
                )}
                <p className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4" />
                  {cert.date ? <>Issued: {cert.date}</> : "Issued: —"}
                </p>
                {cert.pdf && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                      View PDF <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import { motion } from "framer-motion";
import { ExternalLink, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { assetPath } from "@/lib/utils";

const asset = (path: string) => assetPath(path);

const projects = [
  {
    title: "Navigating Nearby Facilities using Augmented Reality",
    description: "AR-based Android application built using Unity, ARCore, and Google Maps API to visualize nearby facilities in real time through camera overlays.",
    image: asset("outputs/Navigating Facilities/screen1.png"),
    tags: ["Unity", "ARCore", "Google Maps API", "GPS", "3D Spatial Mapping"],
    github: "https://github.com/kotapatiharipriya/Navigating_nearby_facilities_using_Augmented_Reality",
    outputs: [
      "outputs/Navigating Facilities/Algorithm.jpg",
      "outputs/Navigating Facilities/screen1.png",
      "outputs/Navigating Facilities/screen2.png",
      "outputs/Navigating Facilities/screen3.png",
      "outputs/Navigating Facilities/screen4.png",
      "outputs/Navigating Facilities/screen5.png",
      "outputs/Navigating Facilities/screen6.png",
      "outputs/Navigating Facilities/screen7.png",
      "outputs/Navigating Facilities/screen8.png",
      "outputs/Navigating Facilities/screen9.png",
      "outputs/Navigating Facilities/screen10.png",
      "outputs/Navigating Facilities/screen11.png",
      "outputs/Navigating Facilities/screen12.png",
      "outputs/Navigating Facilities/screen13.png",
    ].map(asset),
  },
  {
    title: "AI-based Sign Language Translator: Human Pose Estimation",
    description: "YOLO-based human pose estimation for sign language translation pipeline with model efficiency improvement using pruning and FP16 quantization.",
    image: asset("outputs/AI based sign language/pose1.png"),
    tags: ["YOLO", "Pose Estimation", "FP16 Quantization", "Python"],
    github: "https://github.com/kotapatiharipriya/AI-based-sign-language-Translator-Human-Pose-Estimation",
    outputs: [
      "outputs/AI based sign language/pose1.png",
      "outputs/AI based sign language/pose2.png",
      "outputs/AI based sign language/pose3.png",
    ].map(asset),
  },
  {
    title: "Autonomous Driving System",
    description: "Design an autonomous driving perception pipeline for lane detection and real-time vehicle and pedestrian detection using computer vision.",
    image: asset("outputs/Autonomous driving system/demo.gif"),
    tags: ["YOLOv8", "Computer Vision", "Lane Detection", "Object Detection"],
    github: "https://github.com/kotapatiharipriya/Autonomous_driving_System",
    outputs: [
      "outputs/Autonomous driving system/demo.gif",
      "outputs/Autonomous driving system/demo2.gif",
      "outputs/Autonomous driving system/demo3.gif",
    ].map(asset),
  },
  {
    title: "Automatic Speech Recognition",
    description: "Speech-to-text system converting spoken language into written text with support for varied accents and pronunciations using NLP methods.",
    image: asset("outputs/Automatic speech recognition/Picture1.png"),
    tags: ["Speech Recognition", "NLP", "PyAudio", "NLTK"],
    github: "https://github.com/kotapatiharipriya/Automatic_Speech_Recognition",
    outputs: [
      "outputs/Automatic speech recognition/Picture1.png",
      "outputs/Automatic speech recognition/Picture2.png",
      "outputs/Automatic speech recognition/Picture3.png",
      "outputs/Automatic speech recognition/Picture4.png",
    ].map(asset),
  },
  {
    title: "Taxi Fare Prediction",
    description: "Regression analysis on trip-level data incorporating geospatial, temporal, and distance-based variables for fare estimation.",
    image: asset("outputs/Taxi Fare Prediction/Picture1.png"),
    tags: ["Regression", "EDA", "Geospatial Analysis", "Data Analysis"],
    // Repository not available/public yet
    github: "",
    outputs: [
      "outputs/Taxi Fare Prediction/Picture1.png",
      "outputs/Taxi Fare Prediction/Picture2.png",
      "outputs/Taxi Fare Prediction/Picture3.png",
    ].map(asset),
  },
  {
    title: "Vaccination Status Prediction",
    description: "Classification model identifying factors influencing vaccination status using demographic and health attributes with feature selection.",
    image: asset("outputs/vaccination status/Picture1.png"),
    tags: ["Classification", "Feature Selection", "Data Preprocessing"],
    // Repository not available/public yet
    github: "",
    outputs: [
      "outputs/vaccination status/Picture1.png",
      "outputs/vaccination status/Picture2.png",
      "outputs/vaccination status/Picture3.png",
      "outputs/vaccination status/Picture4.png",
    ].map(asset),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my recent work and personal projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-border card-hover glow-effect"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 items-center">
                  {project.github ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        View on GitHub <ExternalLink className="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                  ) : (
                    <div className="text-sm text-muted-foreground">Repository unavailable</div>
                  )}

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <ImageIcon className="w-4 h-4 mr-1" />
                        Outputs
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                        <DialogDescription>Project outputs and results</DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {project.outputs.map((output, idx) => (
                          <div key={idx} className="border rounded-lg overflow-hidden bg-muted">
                            <img
                              src={output}
                              alt={`${project.title} output ${idx + 1}`}
                              className="w-full h-auto object-contain"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

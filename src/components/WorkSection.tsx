import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const WorkSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce solution with seamless checkout and inventory management.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
      link: "#",
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Analytics dashboard with real-time data visualization and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      link: "#",
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure and user-friendly mobile banking experience for modern users.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
      link: "#",
    },
    {
      title: "Healthcare Portal",
      category: "Web Development",
      description: "Patient management system with appointment scheduling and telemedicine.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
      link: "#",
    },
  ];

  return (
    <section id="work" className="section-padding relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-card/50 to-transparent pointer-events-none" />

      <div className="container-wide relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal>
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">
              Our Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl mt-4 mb-6">
              Some of Our <span className="text-gradient">Best Work</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Take a look at some of the projects we've delivered for our clients.
              Each project is crafted with attention to detail and excellence.
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal 
              key={index} 
              delay={0.1 * index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <motion.div
                className="group relative bg-card rounded-2xl overflow-hidden border border-border"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* View Project Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    <a
                      href={project.link}
                      className="px-6 py-3 bg-background/90 backdrop-blur-sm rounded-full text-foreground font-semibold flex items-center gap-2 hover:bg-background transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                {/* Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16">
            <Button variant="heroOutline" size="lg">
              View All Projects
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WorkSection;

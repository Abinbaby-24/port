import { useState } from "react";
import projectEcommerce from "../assets/project-ecommerce.jpg";
import projectDashboard from "../assets/project-dashboard.jpg";
import projectCorporate from "../assets/project-corporate.jpg";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern, full-featured e-commerce solution with payment integration, inventory management, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: projectEcommerce,
      demoUrl: "#",
      codeUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization, user management, and advanced reporting features.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
      image: projectDashboard,
      demoUrl: "#",
      codeUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration, SEO optimization, and multi-language support.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Strapi"],
      image: projectCorporate,
      demoUrl: "#",
      codeUrl: "#",
      category: "Website"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative card-gradient rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent z-10"></div>
                
                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-primary/80 z-20 flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}>
                  <div className="flex gap-4">
                    <button className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium hover:shadow-glow transition-smooth">
                      Live Demo
                    </button>
                    <button className="border-2 border-accent text-accent px-4 py-2 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-smooth">
                      View Code
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-muted/50 text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-glow transition-smooth transform hover:scale-105"
          >
            Let's Build Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
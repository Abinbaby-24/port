import { useEffect, useState } from "react";
import heroBackground from "../assets/hero-background.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-accent rounded-full animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary rounded-full animate-glow-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent rounded-full animate-glow-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="text-gradient block mt-2">Web Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I create stunning, high-performance websites that drive business growth. 
            Let's build something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-glow transition-smooth transform hover:scale-105"
            >
              View My Work
            </button>
            
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-smooth transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
const About = () => {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      icon: "🚀"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers",
      icon: "🎨"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast websites that rank higher and engage better",
      icon: "⚡"
    },
    {
      title: "Maintenance & Support",
      description: "Reliable ongoing support to keep your website running smoothly",
      icon: "🛠️"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate web developer with expertise in creating exceptional digital experiences. 
            With a focus on modern technologies and clean code, I help businesses establish a strong online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth transform hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="card-gradient rounded-xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-accent">Why Choose Me?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
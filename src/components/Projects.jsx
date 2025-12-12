import React from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience with React and Stripe integration",
    tags: ["React", "Tailwind", "Stripe"],
    img: "/images/ecommerce.png",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    tags: ["React", "Firebase", "Tailwind"],
    img: "/images/taskapp.png",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site for creative professionals",
    tags: ["React", "CSS3", "JavaScript"],
    img: "/images/portfolio.png",
  },
  {
    title: "Weather Dashboard",
    description: "Interactive weather app with location-based forecasts",
    tags: ["JavaScript", "API", "CSS3"],
    img: "/images/weather.png",
  },
  {
    title: "Blog Platform",
    description: "Content management system with rich text editor",
    tags: ["Django", "Python", "Bootstrap"],
    img: "/images/blog.png",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="w-full py-16">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-14">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-0 overflow-hidden"
          >
            {/* Image */}
            <div className="w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

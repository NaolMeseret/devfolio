// src/components/Projects.js
import React, { useState } from "react"

const Projects = () => {
  const [filter, setFilter] = useState("all")
  const [activeProject, setActiveProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: "Car Rental System",
      description:
        "A Car Rental System simplifies vehicle rentals by enabling bookings, returns, and tracking of reservations, payments, and availability. It streamlines customer registration, inventory, and billing.",
      image: "/images/carrental.jpg",
      technologies: ["C++", "File Handling", "OOP"],
      github: "https://github.com/NaolMeseret/C-Project",
      demo: "#",
      category: "desktop",
    },
    {
      id: 2,
      name: "GO RENT",
      description:
        "Go-Rent is designed to simplify the rental process by consolidating various services in one user-friendly platform. Our mission is to empower both renters and owners.",
      image: "/images/gorent.jpg",
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/NaolMeseret/Go-rent-project",
      demo: "#",
      category: "desktop",
    },
    {
      id: 3,
      name: "Public Service",
      description:
        "The Public Service Request and Complaint Management System links citizens and authorities for streamlined issue reporting and tracking.",
      image: "/images/publicS.jpg",
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github: "https://github.com/NaolMeseret/NaolMeseret",
      demo: "#",
      category: "web",
    },
    {
      id: 4,
      name: "Oromo Artisan & Storyteller Marketplace",
      description:
        "A modern, multilingual web platform to discover, support, and celebrate Oromo culture through artisan crafts and oral storytelling.",
      image: "/images/publicS.jpg",
      technologies: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
      github:
        "https://github.com/NaolMeseret/Oromo-Artisan-and-Storyteller-Marketplace",
      demo: "#",
      category: "web",
    },
  ]

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <div id="my-projects">
      <section className="projects-container">
        <h2 className="projects-title">Projects</h2>

        <div className="project-filters">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === "web" ? "active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === "desktop" ? "active" : ""}`}
            onClick={() => setFilter("desktop")}
          >
            Desktop
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${
                activeProject === project.id ? "active" : ""
              }`}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <img
                        src="/images/git.svg"
                        alt="GitHub"
                        className="link-icon"
                      />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="bx bx-link-external"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects

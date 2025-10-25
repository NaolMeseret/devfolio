// src/components/Skills.js
import React, { useState } from "react"

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)

  const skills = [
    { name: "C++", icon: "/images/c++.png", level: 90 },
    { name: "Java", icon: "/images/java.png", level: 85 },
    // { name: "HTML5", icon: "/images/html-5.png", level: 95 },
    // { name: "CSS3", icon: "/images/css.png", level: 90 },
    // { name: "JavaScript", icon: "/images/javascript.jpg", level: 88 },
    { name: "React", icon: "/images/react.jpg", level: 95 },
    { name: "Python", icon: "/images/python.png", level: 80 },
    { name: "PHP", icon: "/images/php.png", level: 75 },
    { name: "Git", icon: "/images/git.svg", level: 90 },
    { name: "Node", icon: "/images/node.jpg", level: 60 },
    { name: "Flutter", icon: "/images/flutter.png", level: 60 },
  ]

  return (
    <div id="my-skills">
      <section className="skill-container">
        <div className="skills">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`skill-card ${
                  activeSkill === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-icon-container">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
                <h4>{skill.name}</h4>
                <div className="skill-level">
                  <div
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

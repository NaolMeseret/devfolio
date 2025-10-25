// src/components/About.js
import React, { useState } from "react"
import naolProfile from "/images/naolPRO.png"

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const fullText = `Hi, I’m Naol Meseret, a passionate Software Engineering student who loves turning ideas into functional and beautiful software. I specialize in web development and enjoy exploring new technologies to build projects that are both practical and innovative. I’m always learning, experimenting, and pushing myself to create solutions that make a real impact. My goal is to craft software that not only works seamlessly but also leaves a lasting impression.`

  const displayText = isExpanded ? fullText : fullText.slice(0, 200) + "..."

  return (
    <div className="about-me" id="about-me">
      <h2 className="about-me-title">About Me</h2>
      <div className="about-me-content">
        <div className="about-me-image-container">
          <img src={naolProfile} alt="Naol Meseret" className="profile-image" />
          <div className="image-glow"></div>
        </div>
        <div className="text-content">
          <p className="about-me-text">{displayText}</p>
          <button className="read-more-btn" onClick={toggleReadMore}>
            {isExpanded ? "Read Less" : "Read More"}
          </button>
          <div className="stats-container">
            <div className="stat">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

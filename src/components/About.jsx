// src/components/About.js
import React, { useState } from "react"
import naolProfile from "/images/naolPRO.png"

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  const fullText = `Hi, I'm Naol Meseret, a passionate full-stack developer and software engineer. I focus on software design, cybersecurity, and networking, dedicated to creating secure and scalable web applications. My journey began with a fascination for coding, leading me to explore both front-end and back-end technologies. Currently, I'm enhancing my skills in software design principles as I study Software Engineering at Jimma University. I thrive on collaboration and seek to work on innovative web development projects that blend modern design with robust functionality.`

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

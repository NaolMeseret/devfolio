// src/components/Hero.js
import React, { useState, useEffect, useRef } from "react"
import hackathonImage from "/images/hackathon.jpg"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const heroRef = useRef(null)

  const fullText = "Hi, I'm Naol Meseret"
  const titles = [
    "Full Stack Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ]

  // Enhanced typing animation with better timing
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(
        () => {
          setDisplayText((prev) => prev + fullText[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        },
        currentIndex === 0 ? 500 : 100
      ) // Delay before starting
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [currentIndex, fullText])

  // Rotating titles after typing completes
  useEffect(() => {
    if (!isTypingComplete) return

    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isTypingComplete, titles.length])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("hero-visible")
        }
      },
      { threshold: 0.3 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  // Enhanced scroll function with smooth behavior
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // Download resume function
  const downloadResume = () => {
    // You can replace this with your actual resume file
    const resumeUrl = "/Naol-Meseret-Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Naol-Meseret-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Social links data
  // const socialLinks = [
  //   {
  //     name: "GitHub",
  //     url: "https://github.com/NaolMeseret",
  //     icon: "bx bxl-github",
  //   },
  //   {
  //     name: "LinkedIn",
  //     url: "https://linkedin.com/in/naol-meseret",
  //     icon: "bx bxl-linkedin",
  //   },
  //   {
  //     name: "Twitter",
  //     url: "https://x.com/NaolMeseret",
  //     icon: "bx bxl-twitter",
  //   },
  // ]

  return (
    <div className="hero-section" id="home" ref={heroRef}>
      {/* Animated background elements */}
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <section className="hero-subsection">
        <div className="hero-content">
          {/* Welcome badge */}
          <div className="welcome-badge">
            <span>👋 Welcome to my portfolio</span>
          </div>

          {/* Main heading with enhanced typing animation */}
          <h1 className="am-naol">
            <span className="typing-animation">{displayText}</span>
            {isTypingComplete && <span className="cursor">|</span>}
          </h1>

          {/* Animated titles */}
          <h3 className="full-stack">
            <div className="title-container">
              <span className="title-words">
                {titles.map((title, index) => (
                  <span
                    key={title}
                    className={`title-item ${
                      index === currentTitleIndex ? "active" : ""
                    }`}
                  >
                    {title}
                  </span>
                ))}
              </span>
            </div>
          </h3>

          {/* Description */}
          <p className="hero-description">
            I create <span className="highlight">digital experiences</span> that
            blend innovative design with robust functionality. Passionate about
            building scalable solutions and solving complex problems.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="hero-buttons">
            <button
              className="cta-button primary"
              onClick={() => scrollToSection("contact-me")}
            >
              <span>Get In Touch</span>
              <i className="bx bx-chevron-right"></i>
            </button>

            <button
              className="cta-button secondary"
              onClick={() => scrollToSection("my-projects")}
            >
              <span>View Projects</span>
              <i className="bx bx-code-alt"></i>
            </button>

            <button className="cta-button outline" onClick={downloadResume}>
              <span>Download CV</span>
              <i className="bx bx-download"></i>
            </button>
          </div>

          {/* Quick stats */}
          {/* <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div> */}

          {/* Social links */}
          {/* <div className="hero-social">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={`Visit my ${social.name}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div> */}
        </div>
      </section>

      {/* Enhanced profile section */}
      <section className="profile1">
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src={hackathonImage}
              alt="Naol Meseret - Full Stack Developer"
              className={`profile-image ${imageLoaded ? "loaded" : ""}`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="image-overlay"></div>

            {/* Floating tech badges around image */}
            <div className="tech-badges">
              <div className="badge react">React</div>
              <div className="badge javascript">JavaScript</div>
              <div className="badge node">Node.js</div>
              <div className="badge python">Python</div>
            </div>

            {/* Experience badge */}
            <div className="experience-badge">
              <div className="badge-content">
                <span className="years">2+</span>
                <span className="text">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Availability status */}
          <div className="availability">
            <div className="status-dot"></div>
            <span>Available for new projects</span>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      {/* <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div> */}
    </div>
  )
}

export default Hero

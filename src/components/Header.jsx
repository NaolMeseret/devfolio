// src/components/Header.js
import React, { useState, useEffect } from "react"
// import "./Header.css"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Update active section based on scroll position
      const sections = [
        "home",
        "about-me",
        "my-skills",
        "my-projects",
        "contact-me",
      ]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
    setActiveSection(sectionId)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About" },
    { id: "my-skills", label: "Skills" },
    { id: "my-projects", label: "Projects" },
    { id: "contact-me", label: "Contact" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection("home")
          }}
        >
          Naol M.
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav__links ${isMobileMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav__item">
              <a
                href={`#${item.id}`}
                className={`nav__link ${
                  activeSection === item.id ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

// src/components/ScrollToTop.js
import React, { useState, useEffect } from "react"

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <i className="bx bx-chevron-up"></i>
        </button>
      )}
    </>
  )
}

export default ScrollToTop

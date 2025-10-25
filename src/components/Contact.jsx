// src/components/Contact.js
import React, { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ firstName: "", lastName: "", email: "", message: "" })

      setTimeout(() => setSubmitStatus(""), 3000)
    }, 2000)
  }

  return (
    <div id="contact-me">
      <section className="contact-container">
        <div className="contact-card">
          <div className="contact-form-section">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-subtitle">
              Let's work together on your next project!
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-input"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
              ></textarea>

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? "submitting" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <div className="success-message">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="contact-info">
            <h3>Get in touch</h3>
            <div className="contact-method">
              <i className="bx bx-envelope"></i>
              <span>naolmes15062015@gmail.com</span>
            </div>
            <div className="contact-method">
              <i className="bx bx-phone"></i>
              <span>+25197521137</span>
            </div>
            <div className="contact-method">
              <i className="bx bx-map"></i>
              <span>Jimma, Ethiopia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
